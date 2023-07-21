package com.savefilepickerpackage

import android.app.Activity
import android.content.Intent
import android.net.Uri
import androidx.activity.result.ActivityResultLauncher
import androidx.activity.result.contract.ActivityResultContracts
import androidx.appcompat.app.AppCompatActivity
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.UiThreadUtil


/**
 * Native module's shared implementation
 */
class SaveFilePickerModuleImpl(
    private val reactContext: ReactApplicationContext
) {
    fun saveFile(filename: String) {
        val intent = Intent(Intent.ACTION_CREATE_DOCUMENT).apply {
            addCategory(Intent.CATEGORY_OPENABLE)
            type = "text/html"
            putExtra(Intent.EXTRA_TITLE, filename)
        }

        UiThreadUtil.runOnUiThread {
            activityLauncher.launch(intent)
        }
    }


    interface SaveFilePickerListener {
        fun onSuccess(uri: Uri?)
        fun onCancel()
        fun onError(code: String, message: String)
    }

    companion object {
        private const val UNKNOWN_ACTIVITY_CODE = "UNKNOWN_ACTIVITY_RESULT"
        private const val UNKNOWN_ACTIVITY_MESSAGE = "Unknown result when saving the file."
        const val NAME = "SaveFilePickerModule"
        lateinit var listener: SaveFilePickerListener
        private lateinit var activityLauncher: ActivityResultLauncher<Intent>
        fun registerActivityLauncher(activity: AppCompatActivity) {
            activityLauncher =
                activity.registerForActivityResult(ActivityResultContracts.StartActivityForResult()) {
                    when (it.resultCode) {
                        Activity.RESULT_OK -> listener.onSuccess(it.data?.data)
                        Activity.RESULT_CANCELED -> listener.onCancel()
                        else -> listener.onError(UNKNOWN_ACTIVITY_CODE, UNKNOWN_ACTIVITY_MESSAGE)
                    }
                }
        }
    }
}