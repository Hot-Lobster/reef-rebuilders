import React from 'react';

import firebase from 'firebase';

import { FilePond, File, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
registerPlugin(FilePondPluginImagePreview);

class FilePondInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      files: [],
      uploadValue: 0,
    };

    var config = {
      apiKey: "AIzaSyCHLRCFs1yU16v9-iCHJ0CpfaJrt7qPJkc",
      authDomain: "reef-app-90b21.firebaseapp.com",
      databaseURL: "https://reef-app-90b21.firebaseio.com",
      projectId: "reef-app-90b21",
      storageBucket: "reef-app-90b21.appspot.com",
      messagingSenderId: "676623739019"
    };

    firebase.initializeApp(config);

    firebase.auth().signInAnonymously().catch((error) => {
      console.log(error.message);
      this.setState({
        message: `Authentication error : ${error.code} : ${error.message}`
      });
    });

    console.log(this.props, this.state);
  }

  handleInit() {
    // handle init file upload here
    console.log('now initialised', this.pond);
  }

  handleProcessing(fieldName, file, metadata, load, error, progress, abort) {
    // handle file upload here
    console.log(" handle file upload here");
    console.log(file);

    const fileUpload = file;
    const storageRef = firebase.storage().ref(`filepond/${file.name}`);    
    
    const task = storageRef.put(fileUpload);

    task.on(`state_changed`, (snapshot) => {
      console.log(snapshot.bytesTransferred, snapshot.totalBytes)
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //Process
      this.setState({
        uploadValue: percentage
      })
    }, (error) => {
      //Error
      console.log(error);
      this.setState({
        message: `Upload error : ${error.message}`
      })
    }, () => {
      //Success
      this.setState({
        message: `Upload Success`
      });

      console.log("Fetching download URL...")
      task.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log(downloadURL);
        this.setState({
          downloadURL
        })
      });
    });
  }

  render() {
    return (

      <FilePond ref={ref => this.pond = ref}
        // server={{ process: this.handleProcessing.bind(this) }}
        instantUpload={false}
        oninit={() => this.handleInit()}
        onupdatefiles={(fileItems) => {
          this.setState({
            files: fileItems.map(fileItem => fileItem.file)
          });
        }}>

        {this.state.files.map(file => (
          <File key={file} source={file} />
        ))}

      </FilePond>

    );
  }
}

export default FilePondInput;