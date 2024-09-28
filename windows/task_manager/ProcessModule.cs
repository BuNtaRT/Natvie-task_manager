using Microsoft.ReactNative.Managed;
using System;
using System.Collections.Generic;
using task_manager.Models;
using Windows.System;
using Windows.System.Diagnostics;


namespace task_manager
{
    [ReactModule("Process")]
    class ProcessModule
    {
        private const double UPDATE_TIMER_INTERVAL = 10;

        private int appPollingInterval;
        private System.Timers.Timer processUpdateTimer;
        private string searchQuery = "";

        private List<ProcessInfoModel> procesess = new List<ProcessInfoModel>();

        [ReactEvent("onUpdated")]
        public Action<List<ProcessInfoModel>> UpdateProcessEvent { get; set; }


        [ReactMethod("start")]
        public async void Start(string query)
        {
            DiagnosticAccessStatus diagnosticAccessStatus = await AppDiagnosticInfo.RequestAccessAsync();
            if (diagnosticAccessStatus == DiagnosticAccessStatus.Allowed)
            {
                searchQuery = query;
                if (processUpdateTimer != null)
                {
                    processUpdateTimer.Stop();
                    processUpdateTimer = null;
                }
                processUpdateTimer = new System.Timers.Timer(UPDATE_TIMER_INTERVAL * 1000);
                processUpdateTimer.Elapsed += OnUpdateProcess;
                processUpdateTimer.Start();
            }
        }

        [ReactMethod("stop")]
        public void Stop()
        {
            if (processUpdateTimer != null)
            {
                processUpdateTimer.Stop();
                processUpdateTimer = null;
            }
        }


        [ReactMethod("get")]
        public async void getProcess(string query, IReactPromise<string> promise)
        {
            if (processUpdateTimer != null)
            {
                processUpdateTimer.Stop();
                processUpdateTimer = null;
            }
            processUpdateTimer = new System.Timers.Timer(UPDATE_TIMER_INTERVAL * 1000);
            processUpdateTimer.Elapsed += OnUpdateProcess;
            processUpdateTimer.Start();

            promise.Resolve("123");
        }


        private async void OnUpdateProcess(object sender, object e)
        {
           
            procesess.Clear();
            IReadOnlyList<ProcessDiagnosticInfo> processes = ProcessDiagnosticInfo.GetForProcesses();
            if (processes != null)
            {
                foreach (ProcessDiagnosticInfo process in processes)
                {
                    //BitmapImage image = null;
                    //if (process.IsPackaged)
                    //{
                    //    image = defaultAppImage;
                    //}
                    //else
                    //{
                    //    image = defaultProcessImage;
                    //}
                    ProcessInfoModel processInfo = new ProcessInfoModel(process);
                    procesess.Add(processInfo);
                }
            }

            UpdateProcessEvent(procesess);
        }
    }
}

