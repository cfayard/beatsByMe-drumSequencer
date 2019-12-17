    
    function fetchPreview(id){
        const previewURL = `https://freesound.org/apiv2/sounds/${id}/?token=p5JJnxO4rzVs7KfSkL06XOGh9hyzTrw6x7PJpTHG`;
        fetch(previewURL)
        .then (r => r.json())
        .then((obj) => {
            console.log(obj.previews["preview-hq-mp3"])
        });
    }
    const lowBassFetch = fetchPreview(346316)
    const trumpFetch = fetchPreview(53933)
    const chirpFetch = fetchPreview(115525)
    const hiHatFetch = fetchPreview(7634)
    const snareFetch = fetchPreview(238008)
    const kickFetch = fetchPreview(410149)
    
    const kick = document.querySelector(".kick")
    kick.src = soundMenu.kick
    
    const snare = document.querySelector(".snare")
    snare.src = soundMenu.snare
    
    const hiHat = document.querySelector(".hiHat")
    hiHat.src = soundMenu.hiHat
    
    const chirp = document.querySelector(".chirp")
    chirp.src = soundMenu.chirp
    
    const trump = document.querySelector(".trump")
    trump.src = soundMenu.trump
    
    const lowBass = document.querySelector(".lowBass")
    lowBass.src = soundMenu.lowBass
    
    function playKick(){
        var kickPlay = new Audio(kick.src);
        kickPlay.play()
    }
    function playSnare(){
        var snarePlay = new Audio(snare.src);
        snarePlay.play()
    }
    function playHiHat(){
        var hiHatPlay = new Audio(hiHat.src);
        hiHatPlay.play()
    }
    function playChirp(){
        var chirpPlay = new Audio(chirp.src);
        chirpPlay.play()
    }
    function playTrump(){
        var trumpPlay = new Audio(trump.src);
        trumpPlay.play()
    }
    function playLowBass(){
        var lowBassPlay = new Audio(lowBass.src)
        lowBassPlay.play()
    }
    function clickKick(event){
        event.preventDefault()
    }
    
    
    
    
    