export const ordered_list = () => {
    const level_I = document.querySelectorAll('article > ol');
    const level_II = document.querySelectorAll('article > ol > li > ol');
    const level_III = document.querySelectorAll('article > ol > li > ol > li > ol')
    const level_IV = document.querySelectorAll('article > ol > li > ol > li > ol > li > ol')
    
    // level_I === 1
    level_I.forEach((ol) => {
        ol.setAttribute('type', '1');
    });
    // level_II === A
    // level_III === a
    // level_IV === i
}