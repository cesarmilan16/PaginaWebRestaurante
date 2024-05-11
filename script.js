// Obtener la fecha y hora actual
var now = new Date();
var year = now.getFullYear();
var month = String(now.getMonth() + 1).padStart(2, '0'); // Agrega un cero delante si es necesario
var day = String(now.getDate()).padStart(2, '0'); // Agrega un cero delante si es necesario
var hour = String(now.getHours()).padStart(2, '0'); // Agrega un cero delante si es necesario
var minute = String(now.getMinutes()).padStart(2, '0'); // Agrega un cero delante si es necesario

// Establecer la fecha mínima para el campo de fecha
document.getElementById('fecha').setAttribute('min', `${year}-${month}-${day}`);

// Función para manejar el cambio en el campo de fecha
document.getElementById('fecha').addEventListener('change', function() {
    var selectedDate = new Date(this.value);
    var selectedYear = selectedDate.getFullYear();
    var selectedMonth = String(selectedDate.getMonth() + 1).padStart(2, '0');
    var selectedDay = String(selectedDate.getDate()).padStart(2, '0');

    // Si la fecha seleccionada es el día actual
    if (selectedYear == year && selectedMonth == month && selectedDay == day) {
        // Filtrar opciones de hora para que no permita horas anteriores a la hora actual
        var options = document.getElementById('hora').options;
        for (var i = 0; i < options.length; i++) {
            var horaParts = options[i].value.split(':');
            var optionHour = parseInt(horaParts[0]);
            var optionMinute = parseInt(horaParts[1]);
            if (optionHour < hour || (optionHour == hour && optionMinute < minute)) {
                options[i].disabled = true;
            } else {
                options[i].disabled = false;
            }
        }
    } else {
        // Restablecer todas las opciones si la fecha seleccionada no es el día actual
        var options = document.getElementById('hora').options;
        for (var i = 0; i < options.length; i++) {
            options[i].disabled = false;
        }
    }
});