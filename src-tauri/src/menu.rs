pub fn get_menu_bar() -> tauri::Menu {
    let menu = tauri::Menu::os_default("Communities");
    return menu;
}