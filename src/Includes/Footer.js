import '../index.css';
function Footer() {
  if ((window.location.pathname==='/Login' || window.location.pathname==='/Register'|| window.location.pathname==='/')  ) return null ;
  return (
    <div className='fixed bottom-0 flex justify-center w-full bg-gray-100'>
      <div>© 2020 Deepak</div>
    </div>
  );
}
export default Footer;
