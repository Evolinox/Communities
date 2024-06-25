// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Main Function
fn main() {
    tauri::Builder::default()
        .menu(tauri::Menu::os_default("Communities"))
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
