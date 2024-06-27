// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod menu;

// Main Function
fn main() {
    tauri::Builder::default()
        .menu(menu::get_menu_bar())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
