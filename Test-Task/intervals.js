// arr = ["M2", "C", "asc"];

function intervalConstruction(arr) {

    if (!arr) {
        throw new Error("Null array is not allowed.");
    }

    const semitones = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

    let interval = arr[0],
    startingNote = arr[1],
    direction, semitone, degrees, result ="", note="",
        position2, position , position1 ;

    if (arr.length <= 3 && arr.length >= 2) {
        if (arr.length == 3) {
            direction = arr[2]
        } else {
            direction = "asc"
        }
    } else {
        throw new Error("Illegal number of elements in input array");
    }

    switch (interval) {
        case 'm2':{
            semitone = 1;
            degrees = 1;
        break;
        }

        case 'M2':{
            semitone = 2;
            degrees = 1;
            break;
        }

        case 'm3':{
            semitone = 3;
            degrees = 2;
            break;
        }

        case 'M3':{
            semitone = 4;
            degrees = 2;
            break;
        }

        case 'P4':{
            semitone = 5;
            degrees = 3;
            break;
        }

        case 'P5':{
            semitone = 7;
            degrees = 4;
            break;
        }

        case 'm6':{
            semitone = 8;
            degrees = 5;
            break;
        }

        case 'M6':{
            semitone = 9;
            degrees = 5;
            break;
        }

        case 'm7':{
            semitone = 10;
            degrees = 6;
            break;
        }

        case 'M7':{
            semitone = 11;
            degrees = 6;
            break;
        }

        case 'P8':{
            semitone = 12;
            degrees = 7;
            break;
        }
    }

    for(let i=0;i<notes.length; i++){
        if(startingNote==notes[i] || startingNote==notes[i]+'#' || startingNote ==notes[i]+'b'){
            position = i;
        }
    }

    if(direction == "asc"){
        if(position+degrees>6){
            note += notes[position+degrees-notes.length]
        }
        else{
        note += notes[position+degrees];
        }
    }
    else{
        if(position-degrees<0){
            note += notes[position-degrees+notes.length]
        }
        else{
        note += notes[position-degrees];
        }
    }
result += note;


        if(startingNote=="Cb"){
    startingNote = "B"
        }
        else if(startingNote=="Db"){
            startingNote="C#"
        }
        else if(startingNote=="Eb"){
            startingNote = "D#"
        }
        else if(startingNote=="E#"){
            startingNote="E"
        }
        else if(startingNote=="Fb"){
            startingNote="E"
        }
        else if(startingNote=="Gb"){
            startingNote="F#"
        }
        else if(startingNote=="Ab"){
            startingNote="G#"
        }
        else if(startingNote=="Bb"){
            startingNote="A#"
        }
        else if(startingNote=="B#"){
            startingNote="B"
        }


    for(j=0;j<semitones.length; j++){
        if(startingNote==semitones[j]){
            startingPoint = j;
        }
    }



    for(g=0;g<semitones.length; g++){
        if(note==semitones[g]){
            position2 = g;
        }
    }

    if(direction == "asc"){
            if(startingPoint+semitone>12){
                position1 = startingPoint+semitone-semitones.length
            }
            else{
                position1 = startingPoint+semitone;
            }
        }
        else{
            if(startingPoint-semitone<0){
                position1 = startingPoint-semitone+semitones.length
            }
            else{
                position1 = startingPoint-semitone;
            }
        }


    if(position2-position1==1){
        result += "b"
    }
    else if(position2-position1==2){
        result += "bb"
    }
    else if(position2-position1==-1){
        result += "#"
    }
    else if(position2-position1==-2){
        result += "##"
    }

    return result;
}


//arr = ["C", "D"];

 function intervalIdentification(arr) {
     if (!arr) {
         throw new Error("Null array is not allowed.");
     }

     const semitones = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
     let firstNote = arr[0],
         lastNote = arr[1],
         direction, intervalName="", result = "", position1, position2, semitone;

     if (arr.length <= 3 && arr.length >= 2) {
         if (arr.length == 3) {
             direction = arr[2]
         } else {
             direction = "asc"
         }
     } else {
         throw new Error("Illegal number of elements in input array");
     }

     firstNote = findsNotes(firstNote)
     lastNote = findsNotes(lastNote)

     for(let i=0; i < semitones.length; i++) {
         if(firstNote == semitones[i]){
             position1 = i
         }
         if(lastNote == semitones[i]){
             position2 = i
         }
     }

     if(direction == "asc"){
         if(position1 > position2){
             semitone = semitones.length - position1 + position2
         }
         else{
             semitone = position2 - position1
         }
     }
    else{
        if(position2 > position1){
            semitone = semitones.length - position2 + position1
        }
        else{
            semitone = position1 - position2
        }
     }

    if(semitone == 1){
        intervalName = 'm2'
    }
    else if(semitone == 2){
        intervalName = 'M2'
    }
    else if(semitone == 3){
        intervalName = 'm3'
    }
    else if(semitone == 4){
        intervalName = 'M3'
    }
    else if(semitone == 5){
        intervalName = 'P4'
    }
    else if(semitone == 7){
        intervalName = 'P5'
    }
    else if(semitone == 8){
        intervalName = 'm6'
    }
    else if(semitone == 9){
        intervalName = 'M6'
    }
    else if(semitone == 10){
        intervalName = 'm7'
    }
    else if(semitone == 11){
        intervalName = 'M7'
    }
    else if(semitone == 12){
        intervalName = 'P8'
    }
    else{
        throw new Error("Cannot identify the interval");
    }

     return intervalName
 }

function findsNotes(note){
    if (note == "Cb" || note == "A##" || note == "B#") {
        note = "B"
    } else if (note == "Cbb" || note == "Bb") {
        note = "A#"
    } else if (note == "C##" || note == "Ebb") {
        note = "D"
    } else if (note == "Db" || note == "B##") {
        note = "C#"
    } else if (note == "Dbb") {
        note = "C"
    } else if (note == "D##" || note == "Fb") {
        note = "E"
    } else if (note == "Eb" || note == "Fbb") {
        note = "D#"
    } else if (note == "E##" || note == "Gb") {
        note = "F#"
    } else if (note == "E#" || note == "Gbb") {
        note = "F"
    } else if (note == "F##" || note == "Abb") {
        note = "G"
    } else if (note == "G##" || note == "Bbb") {
        note = "A"
    } else if (note == "Ab") {
        note = "G#"
    }
    return note
}
