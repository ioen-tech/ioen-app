use hdk::prelude::*;
use hdk::prelude::holo_hash::*;
use super::UsageBlock;

#[hdk_extern]
pub fn get_usage_block(entry_hash: EntryHashB64) -> ExternResult<Option<UsageBlock>> {
  let maybe_element = get(EntryHash::from(entry_hash), GetOptions::default())?;

  match maybe_element {
    None => Ok(None),
    Some(element) => {
      let usage_block: UsageBlock = element.entry()
        .to_app_option()?
        .ok_or(WasmError::Guest("Could not deserialize element to UsageBlock.".into()))?;
    
      Ok(Some(usage_block))
    }
  }
}


#[derive(Serialize, Deserialize, Debug)]
#[serde(rename_all = "camelCase")]
pub struct NewUsageBlockOutput {
  header_hash: HeaderHashB64,
  entry_hash: EntryHashB64,
}

#[hdk_extern]
pub fn create_usage_block(usage_block: UsageBlock) -> ExternResult<NewUsageBlockOutput> {
  let header_hash = create_entry(&usage_block)?;

  let entry_hash = hash_entry(&usage_block)?;

  let output = NewUsageBlockOutput {
    header_hash: HeaderHashB64::from(header_hash),
    entry_hash: EntryHashB64::from(entry_hash)
  };

  Ok(output)
}



