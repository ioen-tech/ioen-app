import { Orchestrator } from "@holochain/tryorama";

import usage_logger_usage_block from './energy_monitor/usage_logger/usage_block';

let orchestrator: Orchestrator<any>;

orchestrator = new Orchestrator();
usage_logger_usage_block(orchestrator);
orchestrator.run();



