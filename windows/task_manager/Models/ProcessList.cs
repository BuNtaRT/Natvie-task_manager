using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace task_manager.Models
{
    internal class ProcessList
    {
        private Dictionary<uint, ProcessInfoModel> Processes = new Dictionary<uint, ProcessInfoModel>();

        public void Clear () { 
            
        }

    }
}
