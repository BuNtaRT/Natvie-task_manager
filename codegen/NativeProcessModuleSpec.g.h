
/*
 * This file is auto-generated from a NativeModule spec file in js.
 *
 * This is a C++ Spec class that should be used with MakeTurboModuleProvider to register native modules
 * in a way that also verifies at compile time that the native module matches the interface required
 * by the TurboModule JS spec.
 */
#pragma once

#include <NativeModules.h>
#include <tuple>

namespace task_manager {


struct ProcessModuleSpec : winrt::Microsoft::ReactNative::TurboModuleSpec {
  static constexpr auto methods = std::tuple{
      Method<void(std::string, Promise<std::string>) noexcept>{0, L"get"},
      Method<void() noexcept>{1, L"start"},
      Method<void() noexcept>{2, L"stop"},
  };

  template <class TModule>
  static constexpr void ValidateModule() noexcept {
    constexpr auto methodCheckResults = CheckMethods<TModule, ProcessModuleSpec>();

    REACT_SHOW_METHOD_SPEC_ERRORS(
          0,
          "get",
          "    REACT_METHOD(get) void get(std::string query, ::React::ReactPromise<std::string> &&result) noexcept { /* implementation */ }\n"
          "    REACT_METHOD(get) static void get(std::string query, ::React::ReactPromise<std::string> &&result) noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          1,
          "start",
          "    REACT_METHOD(start) void start() noexcept { /* implementation */ }\n"
          "    REACT_METHOD(start) static void start() noexcept { /* implementation */ }\n");
    REACT_SHOW_METHOD_SPEC_ERRORS(
          2,
          "stop",
          "    REACT_METHOD(stop) void stop() noexcept { /* implementation */ }\n"
          "    REACT_METHOD(stop) static void stop() noexcept { /* implementation */ }\n");
  }
};

} // namespace task_manager
