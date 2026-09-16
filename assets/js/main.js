/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__card, .contact__input',{interval: 200});

/*===== PROJECT CARD SLIDESHOWS =====*/
document.querySelectorAll('.work__card[data-gallery]').forEach(card => {
    const image = card.querySelector('.work__card-image')
    const gallery = card.dataset.gallery.split(',')
    let currentImage = 0

    if(gallery.length > 1){
        window.setInterval(() => {
            image.classList.add('is-fading')
            window.setTimeout(() => {
                currentImage = (currentImage + 1) % gallery.length
                image.src = gallery[currentImage]
                image.classList.remove('is-fading')
            }, 1000)
        }, 8000)
    }
})

/*===== PROJECT MODALS =====*/
const projectModal = document.getElementById('project-modal')
const projectButtons = document.querySelectorAll('[data-project]')
const modalTitle = document.getElementById('project-modal-title')
const modalTag = document.getElementById('project-modal-tag')
const modalSummary = document.getElementById('project-modal-summary')
const detailsPanel = document.getElementById('project-details')
const readmePanel = document.getElementById('project-readme')

const projects = {
    'libras-yt': {
        title: 'Libras-YT',
        tag: 'Web application',
        summary: 'Uma aplicação voltada à acessibilidade de conteúdos do YouTube em Libras.',
        gallery: ['assets/img/librasyt/home.png', 'assets/img/librasyt/howtouse.png', 'assets/img/librasyt/missao.png', 'assets/img/librasyt/player.png', 'assets/img/librasyt/recursos.png'],
        video: 'assets/img/librasyt/librasyt.mp4',
        details: '<h3>Sobre o projeto</h3><p>O Libras-YT foi criado para aproximar pessoas surdas de conteúdos em vídeo, com foco em acessibilidade e uma experiência simples de usar.</p><h3>Tecnologias</h3><p>Consulte o repositório para ver a implementação, estrutura e tecnologias utilizadas.</p><a class="project-modal__link" href="https://github.com/alancscosta/LibrasYT" target="_blank" rel="noopener noreferrer">Abrir repositório <i class="bx bx-link-external"></i></a>',
        readme: '<h3>Libras-YT</h3><p>Projeto de acessibilidade para conteúdos do YouTube em Libras.</p><p>Clone o repositório, instale as dependências indicadas e execute o projeto conforme as instruções oficiais.</p><a class="project-modal__link" href="https://github.com/alancscosta/LibrasYT" target="_blank" rel="noopener noreferrer">Ver README completo no GitHub <i class="bx bxl-github"></i></a>'
    },
    'sistema-biblioteca': {
        title: 'Sistema Biblioteca',
        tag: 'Management system',
        summary: 'Sistema para controlar o acervo, os usuários e os empréstimos de uma biblioteca.',
        gallery: ['assets/img/sistemabiblioteca/autores.png', 'assets/img/sistemabiblioteca/diagrama.PNG', 'assets/img/sistemabiblioteca/editarCliente.png', 'assets/img/sistemabiblioteca/editarLivro.png'],
        video: 'assets/img/sistemabiblioteca/views.mp4',
        details: '<h3>Sobre o projeto</h3><p>Uma solução para centralizar o gerenciamento de livros e facilitar o acompanhamento de empréstimos e devoluções.</p><h3>Tecnologias</h3><p>Veja o repositório para consultar a stack e os detalhes da implementação.</p><a class="project-modal__link" href="https://github.com/alancscosta/Sistema_Biblioteca" target="_blank" rel="noopener noreferrer">Abrir repositório <i class="bx bx-link-external"></i></a>',
        readme: '<h3>Sistema Biblioteca</h3><p>Sistema acadêmico para gerenciamento de biblioteca, com cadastro e controle de empréstimos.</p><p>Consulte o README do repositório para instalação, configuração e execução.</p><a class="project-modal__link" href="https://github.com/alancscosta/Sistema_Biblioteca" target="_blank" rel="noopener noreferrer">Ver README completo no GitHub <i class="bx bxl-github"></i></a>'
    },
    'bot-mix-valorant': {
        title: 'Bot Mix Valorant',
        tag: 'Discord bot',
        summary: 'Bot desenvolvido para organizar mixes e partidas de Valorant dentro do Discord.',
        gallery: ['assets/img/botmix/bot.png', 'assets/img/botmix/partidaRolando.png', 'assets/img/botmix/stats.png', 'assets/img/botmix/votacao.png'],
        video: 'assets/img/botmix/botmix.mp4',
        details: '<h3>Sobre o projeto</h3><p>O bot automatiza a organização das partidas, ajudando a reunir jogadores e deixar o fluxo do mix mais prático dentro do servidor.</p><h3>Mídias do projeto</h3><div class="project-modal__media-note">As imagens e o vídeo abaixo mostram o bot funcionando no Discord.</div>',
        readme: '<h3>Bot Mix Valorant</h3><p>Bot de Discord criado para organizar partidas e mixes de Valorant.</p><p>Este projeto não possui repositório público. As imagens e o vídeo de demonstração serão apresentados na aba de informações.</p>'
    }
}

const closeProjectModal = () => {
    projectModal.classList.remove('is-open')
    projectModal.setAttribute('aria-hidden', 'true')
    document.body.classList.remove('modal-open')
}

const createProjectMedia = project => {
    const gallery = project.gallery.map(image => `<img src="${image}" alt="Imagem do projeto ${project.title}">`).join('')
    const video = project.video ? `<video class="project-modal__video" controls preload="metadata"><source src="${project.video}" type="video/mp4">Seu navegador não suporta vídeo.</video>` : ''
    return `<div class="project-modal__gallery">${gallery}</div>${video}`
}

projectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const project = projects[button.dataset.project]
        modalTitle.textContent = project.title
        modalTag.textContent = project.tag
        modalSummary.textContent = project.summary
        detailsPanel.innerHTML = project.details
        detailsPanel.innerHTML += createProjectMedia(project)
        readmePanel.innerHTML = project.readme
        document.querySelectorAll('.project-modal__tab').forEach(tab => {
            tab.classList.toggle('is-active', tab.dataset.tab === 'details')
            tab.setAttribute('aria-selected', tab.dataset.tab === 'details')
        })
        detailsPanel.classList.add('is-active')
        readmePanel.classList.remove('is-active')
        projectModal.classList.add('is-open')
        projectModal.setAttribute('aria-hidden', 'false')
        document.body.classList.add('modal-open')
    })
})

document.querySelectorAll('[data-modal-close]').forEach(element => element.addEventListener('click', closeProjectModal))
document.querySelectorAll('.project-modal__tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const isDetails = tab.dataset.tab === 'details'
        document.querySelectorAll('.project-modal__tab').forEach(currentTab => {
            currentTab.classList.toggle('is-active', currentTab === tab)
            currentTab.setAttribute('aria-selected', currentTab === tab)
        })
        detailsPanel.classList.toggle('is-active', isDetails)
        readmePanel.classList.toggle('is-active', !isDetails)
    })
})
document.addEventListener('keydown', event => {
    if(event.key === 'Escape' && projectModal.classList.contains('is-open')) closeProjectModal()
})

/*===== IMAGE LIGHTBOX =====*/
const imageLightbox = document.getElementById('image-lightbox')
const lightboxImage = document.getElementById('lightbox-image')

const closeImageLightbox = () => {
    imageLightbox.classList.remove('is-open')
    imageLightbox.setAttribute('aria-hidden', 'true')
    document.body.classList.remove('lightbox-open')
}

const openImageLightbox = image => {
    lightboxImage.src = image.src
    lightboxImage.alt = image.alt
    imageLightbox.classList.add('is-open')
    imageLightbox.setAttribute('aria-hidden', 'false')
    document.body.classList.add('lightbox-open')
}

document.addEventListener('click', event => {
    const image = event.target.closest('.work__image-trigger img, .project-modal__gallery img')
    if(image) openImageLightbox(image)
})
document.querySelectorAll('[data-lightbox-close]').forEach(element => element.addEventListener('click', closeImageLightbox))
document.addEventListener('keydown', event => {
    if(event.key === 'Escape' && imageLightbox.classList.contains('is-open')) closeImageLightbox()
})

/*===== CONTACT FORM =====*/
const contactForm = document.getElementById('contact-form')
const contactStatus = document.getElementById('contact-status')

contactForm.addEventListener('submit', event => {
    event.preventDefault()

    const formData = new FormData(contactForm)
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    const subject = `Contato pelo portfólio - ${name}`
    const body = `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=alanzin0550@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(gmailUrl, '_blank', 'noopener,noreferrer')
    contactStatus.textContent = 'O Gmail foi aberto com a mensagem preenchida.'
})
