package com.screenorientationpackage

import com.facebook.react.bridge.ReactApplicationContext

/**
 * Native module's shared implementation
 */
class ScreenOrientationModuleImpl(
    private val reactContext: ReactApplicationContext
) {
    companion object {
        const val NAME = "ScreenOrientationModule"
    }
}