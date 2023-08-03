import { useContext, useEffect, useState } from 'react';
import './App.css';

// function text_toggle({active}) {
//   if (!active) {
//     return null;
//   } 
//   else {
//     return <p className='fixed flex left-5 bottom-5 animate-test-anim text-indigo-900 pt-2 pb-2 sm:w-1/5 w-1/3
//       mx-auto text-m bg-sky-200 rounded-xl shadow justify-center items-center text-xl'>Button Active</p>;
//   }
// }

function nav_button(setActive, nav_anim) {
  const bg = {
    background: 'url("./assets/list.svg")',
    backgroundSize: 'cover',
    backgroundRepeat : 'no-repeat',
  }

  return <button className= 'fixed top-0 w-9 h-9' style={ bg} onClick={() => {setActive(!nav_anim)}}></button>
}

function nav_elements(text) {
  return <button className='relative w-full flex lg:text-black/50 text-black/100 hover:text-black/100 z-10 h-10 items-center pl-5
    after:content-[""] after:absolute after:flex after:w-1 after:h-7 after:hover:w-full after:-z-10 after:hover:bg-indigo-300 after:bg-indigo-200 after:left-1 after:-translate-y-1/2 after:top-1/2 last:mb-5'>{text}</button>
}

function nav_titles(text) {
  return <p className="font-bold text-xl text-indigo-600 mt-5 mb-5 cursor-default first:mt-0">{text}</p>
}

function nav_bar_mobile(nav_anim, setActive) {
  const close_button_style = {
    background: 'url("./assets/close.svg")',
    backgroundSize: 'cover',
    backgroundRepeat : 'no-repeat',
  };

  return <>
    <span className='fixed w-screen h-screen bg-black/25 backdrop-blur-xl'></span>
    <div className='overflow-auto fixed w-3/4 md:w-full h-screen pl-5 pt-4 bg-white'  id='nav-bar'
    style={nav_anim === true ? {left: '0'} : {left: "-100%"}}>
      {nav_titles("Chapter 1")}
      <button className='absolute bg-black/25 right-5 top-3 w-9 h-9' style={close_button_style} onClick={() => {setActive(!nav_anim)}}></button>
      {nav_elements('Element 1')}
      {nav_elements('Element 2')}
      {nav_elements('Element 3')}
      {nav_elements('Element 4')}
      {nav_elements('Element 5')}
      {nav_elements('Element 6')}
      {nav_elements('Element 7')}
      {nav_elements('Element 8')}
      {nav_titles("Chapter 2")}
      {nav_elements('Element 9')}
      {nav_elements('Element 10')}
      {nav_elements('Element 11')}
      {nav_elements('Element 12')}
      {nav_elements('Element 13')}
      {nav_elements('Element 14')}
      {nav_elements('Element 15')}
      {nav_titles("Chapter 3")}
      {nav_elements('Element 16')}
      {nav_elements('Element 17')}
      {nav_elements('Element 18')}
      {nav_elements('Element 19')}
      {nav_elements('Element 20')}
      {nav_elements('Element 21')}
    </div>
  </>;
}

function nav_bar_normal() {

  return <>
    <div className='overflow-auto w-3/4 sm:w-full h-screen pl-5 pt-4 bg-white' id='nav-bar'>
      {nav_titles("Chapter 1")}
      {nav_elements('Element 1')}
      {nav_elements('Element 2')}
      {nav_elements('Element 3')}
      {nav_elements('Element 4')}
      {nav_elements('Element 5')}
      {nav_elements('Element 6')}
      {nav_elements('Element 7')}
      {nav_elements('Element 8')}
      {nav_titles("Chapter 2")}
      {nav_elements('Element 9')}
      {nav_elements('Element 10')}
      {nav_elements('Element 11')}
      {nav_elements('Element 12')}
      {nav_elements('Element 13')}
      {nav_elements('Element 14')}
      {nav_elements('Element 15')}
      {nav_titles("Chapter 3")}
      {nav_elements('Element 16')}
      {nav_elements('Element 17')}
      {nav_elements('Element 18')}
      {nav_elements('Element 19')}
      {nav_elements('Element 20')}
      {nav_elements('Element 21')}
    </div>
  </>;
}

//window width
const useWindowWide = () => {
  const [width, setWidth] = useState(0)
  
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    
    window.addEventListener("resize", handleResize)
    
    handleResize()
    
    return () => { 
      window.removeEventListener("resize", handleResize)
    }
  }, [setWidth])
  
  return width 
}

function return_text(text) {
  return text;
}

function content() {
  const code_text = '<div class="some class">Text</div>';
  const code_text_style_1 = "text-blue-400 mb-1 last:m-0";
  const code_text_style_2 = "text-blue-400 ml-5 mb-1 last:m-0";
  const code_text_style_3 = "text-blue-400 ml-9 mb-1 last:m-0";
  
  return <>
    <div className='divide-y'>
      {/* element 1 */}
      <div className='mb-9 last:mb-10'>
        <p className='text-sm text-indigo-600 font-bold mb-2'>Element 1</p>
        <p className='text-3xl font-bold mb-2'>Header</p>
        <p className='text-slate-700 mb-2'>Sit incidunt natus voluptatem. Incidunt consequuntur quo sed et ducimus ut. </p>

        <div className='w-full h-auto bg-slate-800 p-4 rounded-xl mt-4 mb-4 overflow-x-auto'>
          <p className={code_text_style_1}>{return_text('<div> class="class-example"')}</p>
          <p className={code_text_style_2}>{return_text('<p>Some Text...</p>')}</p>
          <p className={code_text_style_1}>{return_text('</div>')}</p>
        </div>

        <p className='text-slate-700 mb-2'>
          Pariatur eum consequatur repellat tenetur.
          Velit inventore numquam id saepe et nesciunt quo totam.
          Explicabo et tempore dolor officiis mollitia excepturi explicabo.
        </p>
      </div>

      {/* element 2 */}
      <div className='pt-9 last:mb-10'>
        <p className='text-sm text-indigo-600 font-bold mb-2'>Element 2</p>
        <p className='text-3xl font-bold mb-2'>Container</p>
        <p className='text-slate-700 mb-2'>
        Enim et ea ipsam dolor vitae cumque.
        Tenetur perspiciatis iusto laborum omnis facilis labore.
        Doloremque omnis aliquid odit eaque rerum.
        Adipisci eum corrupti adipisci et tempora quos praesentium quo.
        Non minima vel cum at non nihil.
        Optio distinctio quia repudiandae ut maiores repellendus.</p>

       <div className='w-full h-full divide-y mt-4 mb-5'>
        <div className='grid grid-cols-2  border-gray-200'>
          <div className=''>Limit</div>
          <div className=''>Properties</div>
        </div>

        <div className='grid grid-cols-2'>
          <div className='grid grid-cols-1'>
            <p className='h-10 border-b border-slate-300/50 text-slate-500 text-sm flex items-center'>none</p>
            <p className='h-10 border-b border-slate-300/50 text-slate-500 text-sm flex items-center'>640px (sm)</p>
            <p className='h-10 border-b border-slate-300/50 text-slate-500 text-sm flex items-center'>768px (md)</p>
            <p className='h-10 border-b border-slate-300/50 text-slate-500 text-sm flex items-center'>1024px (lg)</p>
            <p className='h-10 border-b border-slate-300/50 text-slate-500 text-sm flex items-center'>1280px (xl)</p>
          </div>
          
          <div className='grid grid-cols-1'>
            <p className='h-10 border-b border-slate-300/50 text-blue-500 text-sm flex items-center '>width: 100%</p>
            <p className='h-10 border-b border-slate-300/50 text-blue-500 text-sm flex items-center '>max-width: 640px</p>
            <p className='h-10 border-b border-slate-300/50 text-blue-500 text-sm flex items-center '>max-width: 768px</p>
            <p className='h-10 border-b border-slate-300/50 text-blue-500 text-sm flex items-center '>max-width: 1024px</p>
            <p className='h-10 border-b border-slate-300/50 text-blue-500 text-sm flex items-center'>max-width: 1280px</p>
          </div>
          
          <span className='mb-5'></span>
        </div>

        </div>
      </div>

      {/* element 3 */}
      <div className='pt-9 last:mb-10'>
        <p className='text-sm text-indigo-600 font-bold mb-2'>Element 3</p>
        <p className='text-3xl font-bold mb-2'>Paragraf</p>
        <p className='text-slate-700 mb-2'>
        Quidem ratione voluptates voluptate vel sint eaque saepe magni.
        Ratione asperiores odit illo architecto nobis velit.
        Saepe suscipit itaque iste quaerat sed in sit.</p>

      <p className='text-slate-700 mb-2'>
      Nihil ea voluptatem minima vel consequatur quia dolores et.
      Facere magni molestiae odit velit ipsa sit sed odit.
      Nulla eum distinctio minus voluptatem quia animi.</p>

      <div className='w-full h-auto bg-slate-800 p-4 rounded-xl mt-4 mb-4 overflow-x-auto'>
          <p className={code_text_style_1}>{return_text('<div> class="class-example"')}</p>
          <p className={code_text_style_2}>{return_text('<p class="change-text">Some Text...</p>')}</p>
          <p className={code_text_style_1}>{return_text('</div>')}</p>
      </div>
      
      </div>

    </div>
  </>
}

function App() {
  const [nav_anim, setActive] = useState(false);
  const screenW = useWindowWide();

  return (
    <>
    {screenW < 768 ? 
      <div className='w-full h-screen fixed static'>
        {nav_button(setActive, nav_anim)}

        {nav_anim === true ?
          nav_bar_mobile(nav_anim, setActive) :
          <></>
        }
        {/* {content()} */}
      </div>
      : 
      <>
      <div className='sm:w-64 lg:w-80 w-full sticky top-0 h-screen border-r-2 flex flex-column'>
        {nav_bar_normal()}
      </div>
      {/* <div className='sm:w-64 lg:w-80 w-full sticky top-0 h-screen border-r-2 flex flex-column'>
        {nav_bar_test()}
      </div> */}
      </>
    }
      <div className='w-full pl-10 pr-10 pt-9 sm:pl-20 sm:pr-20 sm:pt-10'>
        {content()}
      </div>

    
    </>
  );
}

export default App;
