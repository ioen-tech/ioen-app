use hdk::prelude::*;

#[hdk_entry(id = "usage_block")]
#[serde(rename_all = "camelCase")]
#[derive(Clone)]
pub struct UsageBlock {
    pub t: String, // time
    pub l: f64,    // load W
    pub s: f64,    // solar W
    pub b: f64,    // battery W
    pub i: f64,    // IOEN W
    pub g: f64,    // grid W
}

#[derive(Serialize, Deserialize, SerializedBytes, Debug)]
#[serde(rename_all = "camelCase")]
pub struct LogSignal {
    pub t: String, // time
    pub l: f64,    // load W
    pub s: f64,    // solar W
    pub b: f64,    // battery W
    pub i: f64,    // IOEN W
    pub g: f64,
}
