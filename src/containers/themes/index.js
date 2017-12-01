
import React, { Component } from 'react'
import classes from './theme.css';
import { SketchPicker } from 'react-color';


var custom_style={
        marginBottom: '10px',
         cursor: 'cell' 
       
}
var custom_style1={
        marginBottom: '13px',
       
}
var custom_style_img ={
     width: '700px',
     float:'left'
    
}
var popup_style={
    float:'right'
}

var popup_display={
   display:'block'
}   
var custom_style_popup={
    width: '85%'
}
var header_style_popup={
    padding: '6px',
    borderBottom: '0px solid #e5e5e5'
}
var body_style={
    minHeight: '700px',
    overflowY: 'auto'
}
var no_margin={
  margin:'0px'  
}
var custom_margin_100={
    marginTop:'50px'
}

class About extends Component {

  constructor (props) {
    super(props)
    this.state = { 
        modalActive: false ,
        is_popup: false ,

    }
  }

  openModal = () => {
    this.setState({ modalActive: true })
  }

  closeModal = () => {
    this.setState({ modalActive: false })

  }

  render () {
    return (
<div>

    {this.state.modalActive && (

    <div id="fsModal"
        class="modal animated bounceIn"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true" style={popup_display}>
        <div class="modal-dialog" style={custom_style_popup}>
            <div class="modal-content" >
                <div class="modal-header"  style={header_style_popup}>
                    <h1 id="myModalLabel"
                    class="modal-title" >
                    Theme Preview
                    </h1>
                </div>
                <div class="modal-body" style={body_style}>
                  
                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                        <div class='col-lg-6 <col-md-6></col-md-6> col-sm-12 col-xs-12'>
                              <h4> Select Theme </h4>
                            <div class="gallery_product col-lg-9 col-md-9 col-sm-12 col-xs-12 filter hdpe" style={custom_style,custom_margin_100} >
                                <center><img src="def1.png" onClick={this.openModal} class="img-responsive" style={custom_style_img}/>
                                Default</center>
                            </div>
                        </div>
                        <div ClassName='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                         <h4> Select Property </h4>
                        </div>
                    </div>
                 </div>

                <div class="modal-footer">
                    <a title='Close' style={popup_style} onClick={this.closeModal} >close</a>
                </div>
            </div>
        </div>
    </div>

    )}
    <div class="container">
        <div class="row">
            <br/>
            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe" style={custom_style} >
                <img src="def.png" onClick={this.openModal} class="img-responsive"/>
                <center>Default</center>
            </div>
            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle" style={custom_style} >
                <img src="def1.png"  onClick={this.openModal}class="img-responsive"/>
                <center>Custom1</center>
            </div>
            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe" style={custom_style1}>
                <img src="def2.png"  onClick={this.openModal} class="img-responsive"/>
                <center>Custom2</center>
            </div>
            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation" style={custom_style}>
                <img src="def.png" onClick={this.openModal} class="img-responsive"/>
                <center>Custom3</center>  
            </div>
            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation" style={custom_style}>
                <img src="place.png" onClick={this.openModal} class="img-responsive"/>
                <center> Add New </center>  
            </div>
            
        </div>
    </div>
</div>
    )
  }
}

/*const About = () => (
<div>
    <div class="container">
        <div class="row">
            <br/>
            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe" style={custom_style} >
                <img src="http://fakeimg.pl/365x365/" class="img-responsive"/>
            </div>
            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter sprinkle" style={custom_style} >
                <img src="http://fakeimg.pl/365x365/" class="img-responsive"/>
            </div>
            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter hdpe" style={custom_style}>
                <img src="http://fakeimg.pl/365x365/" class="img-responsive"/>
            </div>
            <div class="gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter irrigation" style={custom_style}>
                <img src="http://fakeimg.pl/365x365/" class="img-responsive"/>
            </div>
            
        </div>
    </div>
</div>
)




    <div class="modal fade in " id="myModal" role="dialog" style={popup_display}>
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <a title='Close' style={popup_style} onClick={this.closeModal}>X</a>
                    <h4 class="modal-title">Modal Header</h4>
                </div>
                <div class="modal-body">
                    <p>Some text in the modal.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal" onClick={this.closeModal}><a title='Close' style={popup_style} >Close</a></button>
                </div>
            </div>
            
        </div>
    </div>


            <button class="btn btn-default">
          Default
        </button>
        <button class="btn btn-primary">
          Primary
        </button>







*/

export default About
















     