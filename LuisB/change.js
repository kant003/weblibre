document.getElementById('miboton').addEventListener('click', cambio)

let im=['https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Oceano_Atl%C3%A1ntico_La_Coru%C3%B1a_Torre_H%C3%A9rcules1.JPG/1280px-Oceano_Atl%C3%A1ntico_La_Coru%C3%B1a_Torre_H%C3%A9rcules1.JPG','https://upload.wikimedia.org/wikipedia/commons/8/88/Neskowin_Beach%2C_near_Proposal_Rock.jpg']
let modo=['D','N'];

        function cambio(){
            
            document.getElementById('miboton').getAttribute('modo');
            document.body.style.backgroundImage=""
            document.getElementById('mititulo').innerHTML= 'Da miedo...';
        }