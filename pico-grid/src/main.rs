use rust_socketio::{ClientBuilder};
use serde_json::json;
use std::{thread, time};

fn main() {
    let socket = ClientBuilder::new("http://localhost:3000")
     .namespace("/")
     .connect()
     .expect("Connection failed");
    let delay = time::Duration::from_millis(1000);
    let mut count = 0u32;
    thread::sleep(delay * 3);
    loop {
        thread::sleep(delay);
        count += 1;
        let log_data = json!({"load": 2500 + count, "solar": 8600 + count, "battery": 600 + count, "site": -5000});
        socket.emit("log", log_data).expect("Server unreachable");
    }
}