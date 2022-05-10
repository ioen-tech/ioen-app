use hdk::prelude::*;

mod usage_block;

use usage_block::LogSignal;
use usage_block::UsageBlock;

entry_defs![PathEntry::entry_def(), UsageBlock::entry_def()];

#[hdk_extern]
fn recv_remote_signal(signal: ExternIO) -> ExternResult<()> {
    let usage_block: LogSignal = signal.decode()?;
    emit_signal(&usage_block)?;
    Ok(())
}
