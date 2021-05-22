$(document).ready(function () {
    let options = ['Meter', 'Kilometer', 'Mile', 'Centimeter', 'Milimeter', 'Micrometer', 'Foot', 'Inch'];
    let values = [39.4, 39370, 63360, 0.3937, 0.03937, 0.00003937, 12, 1];

    let lengths = ['Meter', 'Kilometer', 'Mile', 'Centimeter', 'Milimeter', 'Micrometer', 'Foot', 'Inch'];
    let lengthValues = [39.4, 39370, 63360, 0.3937, 0.03937, 0.00003937, 12, 1];

    let temperatures = ['Celcius', 'Fahrenheit', 'Kelvin'];
    let tempValues = [33.8, 1, -457.87];

    let volumes = ['Liter', 'Mililiter', 'Galon'];
    let volumeValues = [1000, 1, 3785.41];

    let setOptions = () => {
        let row = '';
        $("input").val(1);
        for (let i = 0; i < options.length; i++) {

            row += `<option value=${values[i]}>${options[i]}</option>`;
        }
        document.getElementById('select').innerHTML = row;
        document.getElementById('select1').innerHTML = row;
        $("#select1").val(values[1]);
    }
    setOptions();

    let calculate = () => {
        var inputValue = document.getElementById('input').value;
        var from = document.getElementById('select').value;
        var to = document.getElementById('select1').value;
        $("result").val((inputValue * from) / to);
    }
calculate();

    $(".calculate").change(function () {
        calculate();
    });

    $(".box1").click(function () {
        options = lengths;
        values = lengthValues;
        setOptions();
        calculate();
        $(this).addClass("card1");
        $(".box2").removeClass("card2");
        $(".box3").removeClass("card3");
    });
    $(".box2").click(function () {
        options = temperatures;
        values = tempValues;
        setOptions();
        calculate();
        $(this).addClass("card2");
        $(".box1").removeClass("card1");
        $(".box3").removeClass("card3");
    });
    $(".box3").click(function () {

        options = volumes;
        values = volumeValues;
        setOptions();
        calculate();
        $(this).addClass("card3");
        $(".box1").removeClass("card1");
        $(".box2").removeClass("card2");

    });
}
);