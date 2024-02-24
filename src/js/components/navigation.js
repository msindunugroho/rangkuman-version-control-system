/**
 * navEventStyle
 */
export const navEventStyle = () => {
    const navBar = document.getElementById('navBar')
    const navMenu = document.getElementById('navMenu')
    let menuToggle = false;

    navMenu.addEventListener('click' , () => {
        menuToggle = !menuToggle;
        navBar.style.right= 
        menuToggle? '20px':'-360px'
        navBar.style.opacity= 
        menuToggle? '1':'0'
    })
}