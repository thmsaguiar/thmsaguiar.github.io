//Copiar id do discord para área de transferência
$("#btdiscord").on('click', function() {
    const texto = "thmsaguiar#8761";
     let inputTest = document.createElement("input");
     inputTest.value = texto;
     document.body.appendChild(inputTest);
     inputTest.select();
     document.execCommand('copy');           		
     document.body.removeChild(inputTest);          
     Swal.fire({
         icon:'success',
         title: 'ID copiado!',
        text: 'Pronto, agora é só me enviar uma solicitação! ☺', 				  	
        confirmButtonText: 'Okay',
        confirmButtonColor: '#7DCEA0', 
  });
});
//gráfico de pizza					
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
      labels: ['Coder', 'Designer', 'Mananger', 'Cats Lover', 'Power of friendship'],
      datasets: [{
          label: 'My First Dataset',
          data: [35, 17, 23, 14, 11],
          backgroundColor: [
            'rgb(38, 39, 39)',
            'rgb(58, 86, 114)',
            'rgb(211, 84, 0)',
            'rgb(146, 43, 33)',
            'rgb(17, 122, 101)'
          ],
          hoverOffset: 4
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      },
      /*tooltips: {
          enabled: false
      },
      hover: {
          mode: null
      },*/
  }
});
var ctx2 = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx2, {
  type: 'doughnut',
  data: {
      labels: ['Coder', 'Designer', 'Mananger', 'Cats Lover', 'Power of friendship'],
      datasets: [{
          label: 'My First Dataset',
          data: [35, 17, 23, 14, 11],
          backgroundColor: [
            'rgb(38, 39, 39)',
            'rgb(58, 86, 114)',
            'rgb(211, 84, 0)',
            'rgb(146, 43, 33)',
            'rgb(17, 122, 101)'
          ],
          hoverOffset: 4
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      },
      tooltips: {
          enabled: false
      },
      hover: {
          mode: null
      }
  }
});