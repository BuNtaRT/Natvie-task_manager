using Microsoft.ReactNative.Managed;
using System;
using System.Collections.Generic;
using System.Diagnostics;

//using System.Diagnostics;
using System.IO;
using System.IO.Pipes;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Windows.System;
using Windows.System.Diagnostics;

namespace task_manager
{
    [ReactModule("Process")]
    class ProcessModule
    {
        int count = 0;

        [ReactMethod("get")]
        public async void getProcess(string query, IReactPromise<string> promise)
        {
            count++;
            promise.Resolve(count.ToString());
            //DiagnosticAccessStatus diagnosticAccessStatus = await AppDiagnosticInfo.RequestAccessAsync();
            //if (diagnosticAccessStatus == DiagnosticAccessStatus.Allowed)
            //{
            //    var arr = new List<string>();
            //    var memory = 0d;
            //    IReadOnlyList<ProcessDiagnosticInfo> processes = ProcessDiagnosticInfo.GetForProcesses();
            //    foreach (var info in processes)
            //    {
            //        var memoryReport = await GetProcessMemoryInMB(info);
            //        memory += memoryReport;

            //        var dia = info.GetAppDiagnosticInfos();

            //        if (info.IsPackaged)
            //            foreach (var process in dia)
            //            {
            //                arr.Add(process.AppInfo.DisplayInfo.DisplayName);
            //            }
            //        else
            //            arr.Add(info.ExecutableFileName);
            //    }


            //    Console.WriteLine("complete");
            //    promise.Resolve("complete");
            //}
            //else
            //{
            //    promise.Resolve("access denine");
            //}


            //switch (diagnosticAccessStatus)
            //{
            //    case DiagnosticAccessStatus.Allowed:
            //        Debug.WriteLine("We can get diagnostics for all apps.");
            //        break;
            //    case DiagnosticAccessStatus.Limited:
            //        Debug.WriteLine("We can only get diagnostics for this app package.");
            //        break;
            //}
            //try
            //{
            //    var allDiagnosticInfos = await AppDiagnosticInfo.RequestInfoAsync();
            //    var man = await AppDiagnosticInfo.RequestInfoForAppAsync();
            //    var re = await AppDiagnosticInfo.RequestAccessAsync();
            //    var tt = man[1].AppInfo.DisplayInfo.DisplayName;
            //    promise.Resolve(allDiagnosticInfos[1].AppInfo.DisplayInfo.DisplayName);
            //    //promise.Resolve(allDiagnosticInfos[0].AppInfo.DisplayInfo.DisplayName);
            //}
            //catch (Exception e)
            //{

            //    promise.Resolve(e.Message);
            //}


            //foreach (var diagnosticInfo in allDiagnosticInfos)
            //{
            //    Debug.WriteLine($"App: {diagnosticInfo.AppInfo.DisplayInfo.DisplayName}");

            //    return diagnosticInfo

            //    //foreach (var resourceGroup in resourceGroups)
            //    //{
            //    //    // Получение отчета о памяти
            //    //    var memoryReport = resourceGroup.GetMemoryReport();
            //    //    Debug.WriteLine($"Memory Usage: {memoryReport.TotalCommitUsageInMB} MB");

            //    //    // Можно также получить другие данные, такие как CPU и состояние энергии
            //    //}
            //}


            //return 55;
        }

        //private ProcessInformation getInformation(Process process) 
        //{
        //    var info = new ProcessInformation();
        //    info.Name = process.ProcessName;

        //    return info;
        //}

        public async Task<double> GetProcessMemoryInMB(ProcessDiagnosticInfo processInfo)
        {
            var memoryReport = processInfo.MemoryUsage.GetReport();

            ulong workingSetSizeInBytes = memoryReport.WorkingSetSizeInBytes;

            double memoryInMB = workingSetSizeInBytes / (1024.0 * 1024.0);

            return memoryInMB;
        }

        public class ProcessInformation
        {
            public string Name { get; set; }
            public int CpuLoad { get; set; }
            public int MemoryLoad { get; set; }
        }
    }
}

