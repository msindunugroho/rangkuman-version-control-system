import { anchorCreator } from "./components/anchorCreator.js";
import { dropdownList } from "./components/dropdownList.js";
import { navEventStyle } from "./components/navigation.js";

document.addEventListener('DOMContentLoaded', () => {
navEventStyle()
anchorCreator()
dropdownList()
})