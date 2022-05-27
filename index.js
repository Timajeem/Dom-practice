$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger,.header_menu').toggleClass('active');
    });
}); 

function ChangeFirst(){
    document.getElementById('Image_will_change').src ='100.png';
    document.querySelector('.New_text').innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel facilis sunt, iste distinctio veritatis corporis quidem. Itaque, ut inventore. Ratione sed alias laboriosam sit fugiat nihil sunt nostrum officia reiciendis?  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore voluptatum ducimus id harum amet accusantium! Voluptatem numquam quaerat voluptatum hic incidunt nihil illo blanditiis? Soluta iure vitae nesciunt cumque? Eligendi? ';
}
function ChangeSecond(){
    document.getElementById('Image_will_change').src ='90.png';
    document.querySelector('.New_text').innerHTML = 'Знаки предупреждения делают треугольной формы белого цвета с красным кантом. Исключение из этого правила составляют только знаки, предвещающие железнодорожный переезд и направление поворота';

}

function ChangeThree(){
    document.getElementById('Image_will_change').src ='70.png';
    document.querySelector('.New_text').innerHTML = 'Как понятно из названия группы, знаки запрещают водителю совершить какое-либо действие: проехать, повернуть, обогнать, разогнаться, остановиться. Все запрещающие знаки имеют круглую форму. ';
}

function ChangeFour(){
    document.getElementById('Image_will_change').src ='60.png';
    document.querySelector('.New_text').innerHTML = 'Штрафы за каждый из знаков назначаются различные, в зависимости от ситуации. Например, въезд под «кирпич» на закрытую территорию карается штрафом 1 тыс. рублей за нарушение предписания знака. А за проезд под «кирпич» на встречную полосу движения уже отнимут права на 2-4 года.';
}

function ChangeFive(){
    document.getElementById('Image_will_change').src ='50.png';
    document.querySelector('.New_text').innerHTML = 'Игнорировать запрещающие знаки могут автомобили, включившие спецсигналы и проблесковые маячки. Действия знаков заканчиваются у ближайшего перекрестка или у знаков, отменяющих ранее введенные ограничения. ';
}


