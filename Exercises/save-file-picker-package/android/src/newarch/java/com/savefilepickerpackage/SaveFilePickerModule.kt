package com.savefilepickerpackage

import android.net.Uri
import android.provider.OpenableColumns
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

/**
 * Declare Kotlin class for new arch native module implementation
 *
 * Each turbo module extends codegenerated spec class
 *
 * Class should be annotated with @ReactModule decorator
 */
@ReactModule(name = SaveFilePickerModule.NAME)
class SaveFilePickerModule(
    // Each native module class consumes react application context
    reactContext: ReactApplicationContext
) : NativeSaveFilePickerModuleSpec(reactContext) {
    // Use shared module implementation and forward react application context
    private val moduleImpl = SaveFilePickerModuleImpl(reactContext)

    private var sourceFilename: String = ""
    private var callbackBlock: Callback? = null
    private var promiseBlock: Promise? = null
    private var outputFilename: String = ""

    private fun getOutputFilename(reactContext: ReactApplicationContext, uri: Uri): String {
        var result = ""
        val cursor = reactContext.contentResolver.query(
            uri,
            null,
            null,
            null,
            null
        )
        if (cursor != null) {
            cursor.moveToFirst()
            val columnIndex = cursor.getColumnIndex(OpenableColumns.DISPLAY_NAME)
            result = cursor.getString(columnIndex)
            cursor.close()
        }

        return result
    }

    // Return the name of the module - it should match the name provided in JS specification
    override fun getName() = NAME

    // Exported methods are overriden - based on the spec class
    override fun saveFileWithCallback(filename: String, callback: Callback) {
        callbackBlock = callback
        sourceFilename = filename
        moduleImpl.saveFile(filename)
    }

    override fun saveFileWithPromise(filename: String, promise: Promise?) {
        sourceFilename = filename
        promiseBlock = promise
        moduleImpl.saveFile(filename)
    }

    init {
        SaveFilePickerModuleImpl.listener =
            object : SaveFilePickerModuleImpl.SaveFilePickerListener {
                override fun onSuccess(uri: Uri?) {
                    reactContext.applicationContext.assets.open(sourceFilename)
                        .use { sourceInputStream ->
                            uri?.let { outputUri ->
                                outputFilename = getOutputFilename(reactContext, outputUri)
                                reactContext.contentResolver.openOutputStream(outputUri)
                                    ?.use {
                                        sourceInputStream.copyTo(it)
                                    }
                            }
                        }

                    val callback = callbackBlock
                    val promise = promiseBlock
                    val result = Arguments.createMap().apply {
                        putBoolean("success", true)
                        putBoolean("cancelled", false)
                        putString("outputFilename", outputFilename)
                    }

                    if (callback != null) {
                        callback.invoke(null, result)
                    } else promise?.resolve(result)

                    callbackBlock = null
                    promiseBlock = null
                    sourceFilename = ""
                }

                override fun onCancel() {
                    val callback = callbackBlock
                    val promise = promiseBlock
                    val result = Arguments.createMap().apply {
                        putBoolean("success", false)
                        putBoolean("cancelled", true)
                    }

                    if (callback != null) {
                        callback.invoke(null, result)
                    } else promise?.resolve(result)

                    callbackBlock = null
                    promiseBlock = null
                    sourceFilename = ""
                }

                override fun onError(code: String, message: String) {
                    val callback = callbackBlock

                    if (callback != null) {
                        callback.invoke(Arguments.createMap().apply {
                            putString("code", code)
                            putString("message", message)
                        }, Arguments.createMap().apply {
                            putBoolean("success", false)
                            putBoolean("cancelled", false)
                        })
                    } else promiseBlock?.reject(code, message)

                    callbackBlock = null
                    promiseBlock = null
                    sourceFilename = ""
                }
            }
    }

    companion object {
        const val NAME = SaveFilePickerModuleImpl.NAME
    }
}