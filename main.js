//navbar script:
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementById('navbar-links')
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

//image sliders:
const artGalleryImg = [
    'img/Art_Gallery/White-City_Black-City/2_Mendelsohn-North.jpg',
    'img/Art_Gallery/Tel-Aviv-Alternative/18_TheEnigmaof.jpg',
    'img/Art_Gallery/Cover.jpg',
    'img/Art_Gallery/Old-Young-Portraits/14_Amit.png',
    'img/Art_Gallery/Unscaled/Pine-Cone-Front.jpg',
]
const architectureGalleryImg = [
    'img/Architecture_Gallery/Rejuvenation-Trail/3.jpg',
    'img/Architecture_Gallery/Mixed-Use-Compound/e_VR_ICI009-2.jpg',
    'img/Architecture_Gallery/117-Rothschild-Blvd/historic.jpg',
    'img/Architecture_Gallery/Artists-Studio-Gallery/erez012.jpg',
    'img/Architecture_Gallery/Point-of-Reflection/IMG_6035.jpg',
    'img/Architecture_Gallery/Haifa-Residential/nw-color-1-rendered.jpg',
    'img/Architecture_Gallery/Tempelhof-Messe/CCF31072010_00002.jpg',
    'img/Architecture_Gallery/Azrieli-Sarona-Center/azrieli-sarona_moshe-tzur-architects-and-town-planners8.jpg',
]
const academicsAndTheoryImg = [
    'img/Academics&Theory/TheSublimeObjectofNaziArchitecture/10_Tempelhof.jpg',
    'img/Art_Gallery/Old-Young-Portraits/12_Self-Color.jpg',
    'img/Academics&Theory/Building-Entrances-as-Cultural-Narratives/AhuzatBayit.jpg',
    'img/Academics&Theory/Rembrandt_van_Rijn_-_Portrait_of_the_Artist_as_a_Young_Man_-_Google_Art_Project.jpg',
    'img/Academics&Theory/TheSublimeObjectofNaziArchitecture/Figure10_Nürnberg,_Reichsparteitag,_Lichtdom.jpg',
]
const webDevelopmentImg = [
    'img/Web_Development/card-game.png',
    'img/Web_Development/todo-list.png',
    'img/Web_Development/trade-app.png'
]

const changeImgTimeInterval = 4000

function changeImg(id, images, i) {
    $('#' + id).css('background-image', 'url(' + images[i] + ')').addClass('fade-in-image-slider') 
    if (i < images.length -1) {
        i++
    }
    else {
        i = 0
    }
    setTimeout("changeImg('"+ id +"', "+ id +", " + i + ")", changeImgTimeInterval) //id and array have the same name. 
}

//intro page effects:
function slideIntro() {
    $('#intro-page').slideUp(1900) 
    $('#main-page').slideDown(1900)
    $('.overImage').fadeOut(800)
}

$(window).on('load', function () {
    setTimeout(() => {
        slideIntro()
        changeImg("artGalleryImg", artGalleryImg, 0)
        changeImg("architectureGalleryImg", architectureGalleryImg, 0)
        changeImg("academicsAndTheoryImg", academicsAndTheoryImg, 0)
        changeImg("webDevelopmentImg", webDevelopmentImg, 0)  
    }, 5300)
    
});
