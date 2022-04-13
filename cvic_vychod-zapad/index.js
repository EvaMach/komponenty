// document.querySelector('button').addEventListener('click', () => {
//   fetch('https://api.sunrise-sunset.org/json?lat=50&lng=14.5')
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       const { sunrise, sunset } = data.results;
//       document.body.innerHTML += `<p>Východ slunce: ${sunrise}</p>
//     <p>Západ slunce: ${sunset}</p>`;
//     });
// });

export const SunriseSunset = (props) => {
  const { sunrise, sunset } = props;
  return `
    <p>Východ slunce: ${sunrise}</p>
    <p>Západ slunce: ${sunset}</p>
  `;
};
