package com.screenorientationpackage

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule

/**
 * Declare Kotlin class for new arch native module implementation
 *
 * Each turbo module extends codegenerated spec class
 *
 * Class should be annotated with @ReactModule decorator
 */
@ReactModule(name = ScreenOrientationModule.NAME)
class ScreenOrientationModule(
    // Each native module class consumes react application context
    reactContext: ReactApplicationContext
) : NativeScreenOrientationModuleSpec(reactContext) {
    // Use shared module implementation and forward react application context
    private val moduleImpl = ScreenOrientationModuleImpl(reactContext)

    // Return the name of the module - it should match the name provided in JS specification
    override fun getName() = NAME

    // Exported methods are overriden - based on the spec class

    companion object {
        const val NAME = ScreenOrientationModuleImpl.NAME
    }
}