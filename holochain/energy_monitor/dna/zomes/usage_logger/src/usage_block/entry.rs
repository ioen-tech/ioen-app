use hdk::prelude::*;

#[hdk_entry(id = "usage_block")]
#[serde(rename_all = "camelCase")]
#[derive(Clone)]
pub struct UsageBlock {
    pub end_block_time: u64,
    pub block_length: String,
    pub household_usage: String,
    pub solar_generated: String,
    pub battery_charged: String,
    pub battery_discharged: String,
    pub ioen_supplied: String,
    pub ioen_consumed: String,
    pub grid_consumed: String,
}
