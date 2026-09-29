const $=(s,root=document)=>root.querySelector(s);const $$=(s,root=document)=>[...root.querySelectorAll(s)];

// Guarda la etapa elegida a partir de la URL para reutilizarla durante el recorrido.
const params=new URLSearchParams(location.search);const age=params.get('edad');
if(age){localStorage.setItem('emocionaEdad',age);}const savedAge=localStorage.getItem('emocionaEdad');
const banner=$('#ageBanner');if(banner&&savedAge){banner.innerHTML=`Ruta seleccionada: <strong>${savedAge} años</strong> · El contenido se adaptará progresivamente a esta etapa.`;}

// Primer ejercicio de reconocimiento emocional.
$$('[data-emotion]').forEach(b=>b.addEventListener('click',()=>{const f=$('#emotionFeedback');if(!f)return;if(b.dataset.emotion==='enojo')f.innerHTML='<strong>Buena observación.</strong> El calor en la cara y apretar los puños pueden ser pistas compatibles con enojo. Aun así, una historia breve no permite saber con certeza todo lo que una persona siente.';else if(b.dataset.emotion==='tristeza')f.innerHTML='<strong>También podría aparecer tristeza.</strong> Quedar fuera puede generar más de una emoción. Ahora observa las pistas corporales y conductuales del ejemplo.';else f.innerHTML='<strong>Podría ocurrir en otros contextos.</strong> En este ejemplo, las pistas descritas orientan más hacia enojo, aunque distintas personas pueden vivir una misma situación de formas diferentes.';}));
