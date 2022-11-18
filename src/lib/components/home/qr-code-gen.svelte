<script>
    import { onMount } from 'svelte';
      
      export let value;
      export let size;
      
    let qrcode;
              
      onMount(() => {
          let script = document.createElement('script');
      script.src = "https://blk-svelte.netlify.app/js/qrcode.min.js"
      document.head.append(script);
      
          script.onload = function() {
  
          qrcode = new QRCode("qrcode", {
          text: value,
          width: size,
          height: size,
          colorDark : "#000000",
          colorLight : "#ffffff",
          correctLevel : QRCode.CorrectLevel.L
              });		
              
          };				
        
      });
  </script>
  
  <div id="qrcode"></div>
  
  