import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config';
import './styles/postPanel.css';
import TableRow from '../PostPanel/TableRow'
import {
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    FormText,
    Label,
    Button } from 'reactstrap';

class PostPanel extends Component {
    constructor(props){
        super(props);
        this.changeImage = this.changeImage.bind(this);
        
        this.state = {
            fileimages : [],
            imagePreviewUrl : [],
            inforProduction : {
                manufacturer : '',
                name : '',
                _3G : '',
                _4G : '',
                size : '',
                weight : '',
                display : '',
                resolution : '',
                sim : '',
                ram : '',
                romColorPrice : [[0,0,0]],
                os : '',
                description : '',
                promotion : '',
                status : ''
                
            },
            temp : 0
        }
    }
    

    changeImage (e){
        let reader = new FileReader();
        let file = e.target.files[0];
        
        e.preventDefault();
        reader.onloadend = () => {
            this.setState({
                fileimages: [...this.state.fileimages, file],
              imagePreviewUrl: [...this.state.imagePreviewUrl, reader.result]
            });
          }
      
        if(file) reader.readAsDataURL(file);
    }
    
    handleName = (e) => {
        let name = e.target.value;
        this.setState(prevState => ({
            inforProduction : {
                ...prevState.inforProduction,
                name : name
            }
        }))
    }

    handle3G = (e)=>{
        this.setState({
            inforProduction : {
                ...this.state.inforProduction,
                _3G : e.target.value
            }
        })
    }

    handle4G = (e) => {
        this.setState({
            inforProduction : {
                ...this.state.inforProduction,
                _4G : e.target.value
            }
        })
    }

    handleDisplay = (e) => {
        this.setState({
            inforProduction : {
                ...this.state.inforProduction,
                display : e.target.value
            }
        })
    }

    handleResolution = (e)=>{
        this.setState({
            inforProduction : {
                ...this.state.inforProduction,
                resolution : e.target.value
            }
        })
    }

    handleSize = (e)=>{
        this.setState({
            inforProduction : {
                ...this.state.inforProduction,
                size : e.target.value
            }
        })
    }
    
    handleWeight = (e)=>{
        this.setState({
            inforProduction : {
                ...this.state.inforProduction,
                weight : e.target.value
            }
        })
    }

    handlePrice = (e) => {
        this.setState({
            inforProduction : {
                ...this.state.inforProduction,
                price : e.target.value
            }
        })
    }

    handleDescription = (e) => {
        this.setState({
            inforProduction : {
                ...this.state.inforProduction,
                description : e.target.value
            }
        })
    }

    handlePromotion = (e) => {
        this.setState({
            inforProduction : {
                ...this.state.inforProduction,
                promotion : e.target.value
            }
        })
    }

    handleOS = (e) =>{
        this.setState({
            inforProduction : {
                ...this.state.inforProduction,
                os : e.target.value
            }
        })
    }

    handleRAM = (e) => {
        this.setState({
            inforProduction : {
                ...this.state.inforProduction,
                ram : e.target.value
            }
        })
    }

    handleManufac = (e) => {
        this.setState({
            inforProduction : {
                ...this.state.inforProduction,
                manufacturer : e.target.value
            }
        })
    }

    addRound = (e) => {
        // setState
        this.setState({
          inforProduction : {
            ...this.state.inforProduction,
            romColorPrice: [...this.state.inforProduction.romColorPrice, [0, 0, 0]],
          }
        });
      }

    handleInputChange = async (value,row, col) => {
        // setState
        this.setState({
            inforProduction:{
                ...this.state.inforProduction,
                romColorPrice: this.state.inforProduction.romColorPrice.map((item, index) => {
                    if (index === row) {
                      // update
                      const newRow = item.map((score, i) => {
                        if (i === col) {
                          // update
                          return value;
                        } else {
                          return score;
                        }
                      });
            
                      return newRow;
                    } else {
                      return item;
                    }
                  }),
            }
          
        });
      }
    handleSim = (e) => {
        this.setState({
            inforProduction : {
                ...this.state.inforProduction,
                sim : e.target.value
            }
        })
    }

    handleStatus = (e)=>{
        this.setState({
            inforProduction : {
                ...this.state.inforProduction,
                status : e.target.value
            }
        })
    }

    handleUpload = (e) => {
        e.preventDefault();
        let dataPath ;
        // call ajax
        let formData = new FormData();
        this.state.fileimages.map((item, index) => (
            formData.append('file', item, item.name)
        ))
        
        const name = this.state.inforProduction.name;
// //tao forder save image
//         axios({
//             url: `${config.baseUrl}/createFolder?name=${name}`,
//             method: `post`, 
//           })
//             .then((response) => {
//               console.log(response.data);
//             })
//             .catch((error) => console.log(error));

//send image to folder in back-end
        axios({
        url: `${config.baseUrl}/upload-image`,
        method: `post`,
        headers: {
            'content-type': 'multipart/form-data'
        },
        data : formData
        })
        .then((response) => {
          console.log(response.data);
          dataPath = response.data;
          if(dataPath) {
            axios({
                url: `${config.baseUrl}/api/posts`,
                method: `post`,
                data :{
                    data : this.state.inforProduction,
                    path : dataPath
                } 
            
              })
                .then((response) => {
                  console.log(response.data);
                })
                .catch((error) => console.log(error));
          }
          dataPath = '';
        })
        .catch((error) => console.log(error));

//send data to mongo
       

}

    render() {
        return (
            <div className='container-fluid my-4 bg'>
                  <Row>
                    <Col sm='3'></Col>
                    <Col sm='6' className='body'>
                    
                        <Form className='formPost'>
                            <h2 style={{paddingBottom : '25px'}}>New Production</h2>

                            <FormGroup>
                                <Label for="manufac">Manufacturer</Label>
                                <Input onChange={this.handleManufac} type="select" name="manufac" id="ramanufac">
                                    <option>Apple</option>
                                    <option>SamSung</option>
                                    <option>Xiaomi</option>
                                    <option>Google</option>
                                    <option>Nokia</option>
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input onChange={this.handleName} name="name" id="name" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="3G">3G</Label>
                                <Input onChange={this.handle3G} name="3G" id="3G" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="4G">4G</Label>
                                <Input onChange={this.handle4G} name="4G" id="4G" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="size">Size</Label>
                                <Input onChange={this.handleSize} name="size" id="size" />
                            </FormGroup>    

                            <FormGroup>
                                <Label for="weight">Weight</Label>
                                <Input onChange={this.handleWeight} name="weight" id="weight" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="display">Display</Label>
                                <Input onChange={this.handleDisplay} name="display" id="dispaly" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="resolution">Resolution</Label>
                                <Input onChange={this.handleResolution} name="resolution" id="resolution" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="Sim">Sim</Label>
                                <Input onChange={this.handleSim} type="select" name="sim" id="sim">
                                    <option>1</option>
                                    <option>2</option>
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label for="ram">RAM</Label>
                                <Input onChange={this.handleRAM} type="select" name="ram" id="ram">
                                    <option>2GB</option>
                                    <option>3GB</option>
                                    <option>4GB</option>
                                    <option>6GB</option>
                                    <option>8GB</option>
                                </Input>
                            </FormGroup>
                            

                            <FormGroup>
                                <Label>Rom-Color-Price</Label>
                                {this.state.inforProduction.romColorPrice.map((round, index) => (
                                    <TableRow
                                    key={index}
                                    rowIndex={index}
                                    handleInputChange={this.handleInputChange}
                                    />
                                ))}
                                <Button className='mt-2' onClick={this.addRound}>Add Type</Button>
                            </FormGroup>
                            

                            
                            
                            
                            <FormGroup>
                                <Label for="os">OS</Label>
                                <Input onChange={this.handleOS} type="select" name="os" id="os">
                                    <option>iOS</option>
                                    <option>Android</option>
                                    <option>Other</option>
                                </Input>
                            </FormGroup>

                            <FormGroup >
                                <Label for="description">Description</Label>
                                <Input onChange={this.handleDescription} className='description' name="text" type="textarea" id="description" />
                            </FormGroup>

                            <FormGroup >
                                <Label for="promotion">Promotion</Label>
                                <Input onChange={this.handlePromotion} className='promotion' name="text" type="textarea" id="promotion" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="status">Status</Label>
                                <Input onChange={this.handleStatus} name="status" id="status" />
                            </FormGroup>

                            <FormGroup >
                                <Label for="image">Image</Label>
                                <Input onChange={this.changeImage} name="image" type="file" id="image"/>
                                <FormText color="muted">
                                    This is a choose image
                                </FormText>
                            </FormGroup>
                            
                            <Row>
                                {this.state.imagePreviewUrl.map((url, index)=>(
                                <Col key={index} sm='6' className='my-3'>
                                    <div className="imgPreview">
                                        <img src={url} alt='phone' />
                                    </div>                             
                                </Col>
                                ))}    
                            </Row>

                            <Button onClick={this.handleUpload} type='submit' color="success" size="lg" className="mt-2">Up load</Button>
                        </Form>
                        
                    </Col>
                  </Row>
                
            </div>
        );
    }
}

export default PostPanel;
