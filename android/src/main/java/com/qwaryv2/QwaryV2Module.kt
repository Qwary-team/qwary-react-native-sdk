package com.qwaryv2

import android.content.Context
import android.util.Log
import androidx.fragment.app.FragmentActivity
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import javax.annotation.Nullable;
import com.qwary.Qwary

class QwaryV2Module(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  private var context: Context = reactContext

  override fun getName(): String {
    return NAME
  }

  // Example method
  // See https://reactnative.dev/docs/native-modules-android
    @ReactMethod
  fun configure(qwSettings: String) {
    Log.d("TAG", "configure() called with: qwSettings = $qwSettings")
    Qwary.configure(context, qwSettings, getFragmentActivity())
  }

  @ReactMethod
  fun presentSurvey(isBanner: Boolean) {
    getFragmentActivity()?.let { Qwary.presentSurvey(it, isBanner) }
  }

  @ReactMethod
  fun addEvent(eventName: String) {
    Qwary.addEvent(eventName)
  }

  @ReactMethod
  fun logout() {
    Qwary.logout()
  }

  @ReactMethod
  fun dismissActiveSurvey() {
    Qwary.dismissActiveSurvey()
  }

  @Nullable
  private fun getFragmentActivity(): FragmentActivity? {
    val activity = currentActivity
    return if (activity is FragmentActivity) {
      activity as FragmentActivity?
    } else {
      null
    }
  }

  companion object {
    const val NAME = "QwaryV2"
  }
}
