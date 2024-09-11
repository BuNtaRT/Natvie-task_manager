using System;
using Windows.System.Diagnostics;
using Windows.UI.Xaml.Media.Imaging;

namespace task_manager.Models
{
    internal class ProcessInfoModel
    {
        public BitmapImage Logo { get; set; }
        public string AppType { get; set; }
        public TimeSpan UserTime { get { return cpuReport != null ? cpuReport.UserTime : TimeSpan.MinValue; } }

        public uint ProcessId { get { return pdi.ProcessId; } }
        public string ExecutableFileName { get { return pdi.ExecutableFileName; } }

        public ulong PageFileSizeInBytes { get { return memoryReport != null ? memoryReport.PageFileSizeInBytes : ulong.MinValue; } }
        public ulong PeakPageFileSizeInBytes { get { return memoryReport.PeakPageFileSizeInBytes; } }

        public ulong WorkingSetSizeInBytes { get { return memoryReport != null ? memoryReport.WorkingSetSizeInBytes : ulong.MinValue; } }
        public ulong PeakWorkingSetSizeInBytes { get { return memoryReport.PeakWorkingSetSizeInBytes; } }

        public long OtherOperationCount { get { return diskReport.OtherOperationCount; } }

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
            Logo = null;
            AppType = p.IsPackaged ? "Packaged" : "Win32";
        }
    }
}
