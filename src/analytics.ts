let logged;

function sendAnalatytics(data: string) {
  console.log(data);
  logged = true;
  console.log(logged);
  logged = 4;
  console.log(logged);
}

sendAnalatytics('The Data');
