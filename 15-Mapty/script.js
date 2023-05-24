'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 
'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const workoutList = document.querySelector('.workout');

let bool = true;
let map

const workOutsArr = [];
let AllWorkOuts = localStorage.getItem('workouts');
let index = !JSON.parse(AllWorkOuts) ? 0 :
 JSON.parse(AllWorkOuts).length;

class coordsCl{
    constructor(lat,lng,marker){
        this.lat = lat
        this.lng = lng
        this.marker = marker
    }
    get coord(){
        return [this.lat,this.lng]
    }
    clickMarker(){
        return L.marker(this.coord)
    }
}

class workouts extends coordsCl{
    date = new Date();
    constructor(lat,lng,marker,index,type,dis,dur,other){
        super(lat,lng,marker)
        this.index = index
        this.type = type 
        this.dis = dis 
        this.dur = dur 
        this.other = other
    }

    get popUpMessage (){

        const type = this.type.slice(0,1).toUpperCase() + this.type.slice(1)
        const month = months[this.date.getMonth()];
        const day = this.date.getDate();
        return `${this.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${type} on ${month} ${day}`
    }

    get popUpClass(){
        return this.type === 'running' ? 'running-popup' : 'cycling-popup'
    }

    stampMarker(){
        this.clickMarker().addTo(map)
        .bindPopup(L.popup({
            autoClose:false,
            maxWidth:250,
            minWidth:100,
            closeOnClick:false,
            className:this.popUpClass
        }))
        .setPopupContent(this.popUpMessage)
        .openPopup();
    }
}

navigator.geolocation.getCurrentPosition(function(pos){
    const {latitude,longitude} = pos.coords;

    const coords = [latitude,longitude];

    map = L.map('map').setView(coords, 15);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">'
        +'OpenStreetMap</a> contributors'
    }).addTo(map);

    let workOutArrs = JSON.parse(AllWorkOuts);

    if(workOutArrs !== null){
        workOutArrs.forEach(e => {
            const eWorkouts = 
            new workouts(e.lat,e.lng,e.marker,e.index,e.type,e.dis,e.dur,e.other);
            eWorkouts.stampMarker();
            containerWorkouts.insertAdjacentHTML('beforeend',
            makeWorkoutList(e.index,eWorkouts));
        })
    }

    map.on('click',function(mapEvent){

        form.classList.remove('hidden');
        inputDistance.focus();
        inputType.value = 'running'
        
        const {lat,lng} = mapEvent.latlng;
        const coord = new coordsCl(lat,lng,true)

        if(coord.marker === true){
          coord.clickMarker().addTo(map);
          coord.marker = false;
        } else return

        document.addEventListener('keydown',function(e){

            if(e.code === 'Enter' && coord.marker === false){
                const workoutIndex = index++
                const workout = new workouts(lat,lng,true,workoutIndex,
                    inputType.value,
                    inputDistance.value,
                    inputDuration.value,
                    bool === !bool ? inputElevation.value : inputCadence.value
                )
                
                if(!alerter(inputType.value,
                    inputDistance.value,
                    inputDuration.value,
                    bool === !bool ? inputElevation.value : inputCadence.value)
                ) {
                    alert('check your input')
                    return;
                }

                workOutsArr.push(workout);

                let alreadyWorkouts = JSON.parse(localStorage.getItem('workouts'));

                if(alreadyWorkouts === null) {
                    localStorage.setItem(`workouts`, JSON.stringify(workOutsArr));
                } else {
                    localStorage.setItem(`workouts`,
                    JSON.stringify(alreadyWorkouts.concat(workOutsArr)));
                }

                workout.stampMarker();

                coord.marker = true;

                form.classList.add('hidden');
                
                containerWorkouts.insertAdjacentHTML('beforeend',
                makeWorkoutList(workoutIndex,workout));
                nullMaker([inputDistance,inputDuration,inputCadence,inputElevation]);
                e.preventDefault();
            }
        })

    })
        
},function(){
    alert("Can't get your position");
});

const nullMaker = (arr) => {
    arr.forEach(e => e.value = null);
}

const objMaker = (a,b,c,d,e)=> {
    const obj = { type:a,dis:b,dur:c,cad:d,elev:e }
    return obj
}

containerWorkouts.addEventListener('click',function(e){
    const check =  e.target.classList.value.indexOf('workout')

    if(check === 0){
        const ev = e.target.closest('.workout');
        if(!ev) return;

        const getId = ev.dataset.id;
        let toFindArr = JSON.parse(localStorage.getItem('workouts'));

        const result = toFindArr.find(e=> e.index === +getId);
        const {lat,lng} = result;

        map.setView([lat,lng],15);
    } 
})

inputType.addEventListener('change',function(e){
    bool = !bool
    if(bool){
        inputCadence.className = inputCadence.className;
        inputCadence.previousElementSibling.innerHTML = 'Cadence';
        inputCadence.placeholder = 'step/min'
    }else if(!bool){
        inputCadence.className = inputElevation.className
        inputCadence.previousElementSibling.innerHTML = 'Elevation';
        inputCadence.placeholder = 'meter'
    }
})

const makeWorkoutList = (index,obj) => {
return    `<li class="workout workout--${obj.type}" data-id="${index}">
<h2 class="workout__title">${obj.popUpMessage}</h2>
<div class="workout__details">
  <span class="workout__icon">${obj.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</span>
  <span class="workout__value">${obj.dis}</span>
  <span class="workout__unit">km</span>
</div>
<div class="workout__details">
  <span class="workout__icon">⏱</span>
  <span class="workout__value">${obj.dur}</span>
  <span class="workout__unit">min</span>
</div>
<div class="workout__details">
  <span class="workout__icon">⚡️</span>
  <span class="workout__value">${(obj.dis/obj.dur).toFixed(1)}</span>
  <span class="workout__unit">${obj.type === 'running' ? 'km/min' : 'km/h'}</span>
</div>
<div class="workout__details">
  <span class="workout__icon">${obj.type === 'running' ? '🦶🏼' : '⛰'}</span>
  <span class="workout__value">${obj.other}</span>
  <span class="workout__unit">${obj.type === 'running' ? 'spm' : 'm'}</span>
</div>
</li>`
}

const alerter = function(a,b,c,d){
    const arr = [a,b,c,d];
    let result
    arr.forEach(e => {
        if(!e || Number(e) < 0) return result = false 
        if( +e === Number(e) && Number(e) > 0) result = true
    });
    return result
}