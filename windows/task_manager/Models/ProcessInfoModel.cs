using System;
using System.Text.Json.Serialization;
using Windows.System.Diagnostics;
using Windows.UI.Xaml.Media.Imaging;

namespace task_manager.Models
{
    internal class ProcessInfoModel
    {
        //public BitmapImage Logo { get; set; }
        public string AppType { get; set; }
        public string time { get; set; }

        public uint id { get; set; }
        public string name { get; set; }


        public ulong memorySwap { get; set; }
        public ulong memorySwapPeak { get; set; }
        public ulong cpuLoad { get; set; }

        public ulong memoryLoad { get; set; }
        public ulong memoryLoadPeak { get; set; }

        public long diskOperation { get; set; }

        private ProcessDiagnosticInfo pdi;

        private ProcessCpuUsageReport cpuReport;
        private ProcessMemoryUsageReport memoryReport;
        private ProcessDiskUsageReport diskReport;

        public ProcessInfoModel(ProcessDiagnosticInfo p)
        {
            pdi = p;
            cpuReport = pdi.CpuUsage.GetReport();
            diskReport = pdi.DiskUsage.GetReport();
            memoryReport = pdi.MemoryUsage.GetReport();
            //Logo = null;
            AppType = p.IsPackaged ? "Packaged" : "Win32";
            id = pdi.ProcessId;
            name = pdi.ExecutableFileName;
            memorySwap = memoryReport != null ? memoryReport.PageFileSizeInBytes : ulong.MinValue;
            memorySwapPeak = memoryReport.PeakPageFileSizeInBytes;
            memoryLoad = memoryReport != null ? memoryReport.WorkingSetSizeInBytes : ulong.MinValue; 
            memoryLoadPeak = memoryReport.PeakWorkingSetSizeInBytes;

            diskOperation = diskReport.OtherOperationCount;
            time = cpuReport != null ? cpuReport.UserTime.ToString() : "";
        }
    }
}
