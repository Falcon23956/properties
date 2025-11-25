
export default function WhatsAppButton({number='0758625209'}) {
  const url = `https://wa.me/${number.replace(/[^0-9]/g,'')}`;
  return (
    <a href={url} target="_blank" rel="noreferrer" style={{position:'fixed',right:20,bottom:20}}>
      <div style={{background:'#25D366',padding:12,borderRadius:999,color:'#fff'}}>WhatsApp</div>
    </a>
  )
}
