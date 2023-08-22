import React from 'react';
import '../css/footer.css';
import {GrGithub} from 'react-icons/gr';
import {GrLinkedin} from 'react-icons/gr';
import {GrTwitter} from 'react-icons/gr';
import { MdCopyright } from "react-icons/md"

function Footer() {
  return (
    <div className='footer bg-slate-50'>
      <address className='address'>
        Bloom Tauta<br/>
        P.O BOX 57-00511<br/>
        Ong'ata Rongai<br/>
        bloomtauta@gmail.com<br/>
      </address>
      <div className='hr'></div>
      <div className='reach_details'>
        <p className='reach'>Reach me on:</p>
        <div className="socials">
          <p className='github'><GrGithub/>Github</p>
          <p className='linkedin'><GrLinkedin/>LinkedIn</p>
          <p className='twitter'><GrTwitter/>Twitter</p>
        </div>
        <p className='copyright'><MdCopyright/>2023 Bloom Tauta</p>
      </div>
    </div>
  )
}

export default Footer;