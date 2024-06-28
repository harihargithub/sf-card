//sf-card/src/indexnh.js
import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import './addlcss.css';

const Vertical = () => {
    return (<div className='control-pane'>
        <div className='control-section card-control-section vertical_card_layout'>
            <div className="e-card-resize-container">
                <div className='row'>
                    <div className="row card-layout">
                        <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                            <div className="e-card profile" style={{ justifyContent: 'flex-start' }}>
                                <div className="e-card-header">
                                    <div className="e-card-header-image e-card-corner"></div>
                                </div>
                                <div className="e-card-header">
                                    <div className="e-card-header-caption center">
                                        <div className="e-card-header-title">Harihar Nagarajan</div>
                                        <div className="e-card-sub-title">Proprietor - Abjaja Enterprises</div>
                                    </div>
                                </div>
                                <div className="e-card-separator"></div>
                                <div className="e-card-content"> Harihar holds a prestigious Certificate of Distinction in 'Advanced Full Stack Software Development' from IIT-Roorkee</div>
                                <div className="e-card-actions center">
                                    <a href="mailto:nharihar1@gmail.com" className="e-card-btn" title="E-mail">
                                        <span className="e-mail-icon cb-icons"></span>
                                    </a>
                                    <a href="https://www.linkedin.com/in/harihar-nagarajan-452a6a1b/#" className="e-card-btn" title="LinkedIn">
                                        <span className="e-google-icon cb-icons"></span>
                                    </a>
                                    <a href="https://www.facebook.com/abjajaenterprises" className="e-card-btn" title="Facebook">
                                        <span className="e-fb-icon cb-icons"></span>
                                    </a>
                                    <a href="https://twitter.com/nharihar1" className="e-card-btn" title="Twitter">
                                        <span className="e-tweet-icon cb-icons"></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};
export default Vertical;

const root = createRoot(document.getElementById('sample'));
root.render(<Vertical />);