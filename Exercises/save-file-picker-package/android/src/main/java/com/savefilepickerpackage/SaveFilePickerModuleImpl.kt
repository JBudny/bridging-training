package com.savefilepickerpackage

import com.facebook.react.bridge.ReactApplicationContext

/**
 * Native module's shared implementation
 */
class SaveFilePickerImpl(
    private val reactContext: ReactApplicationContext
) {


    companion object {
        const val NAME = "SaveFilePicker"
    }
}