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
    const task = storageRef.put(fileUpload)

    task.on(`state_changed`, (snapshot) => {
      console.log(snapshot.bytesTransferred, snapshot.totalBytes)
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //Process
      this.setState({
        uploadValue: percentage
      })
    }, (error) => {
      //Error
      this.setState({
        messag: `Upload error : ${error.message}`
      })
    }, () => {
      //Success
      this.setState({
        messag: `Upload Success`,
        picture: task.snapshot.downloadURL
      })

      storageRef.getMetadata().then((metadata) => {
        // Metadata now contains the metadata for 'filepond/${file.name}'
        let metadataFile = {
          name: metadata.name,
          size: metadata.size,
          contentType: metadata.contentType,
          fullPath: metadata.fullPath,
          downloadURLs: metadata.downloadURLs[0],
        }

        const databaseRef = firebase.database().ref('/filepond');

        databaseRef.push({
          metadataFile
        });

      }).catch(function (error) {
        this.setState({
          messag: `Upload error : ${error.message}`
        })
      });
    })
  }

  render() {
    return (

      <FilePond ref={ref => this.pond = ref}
        server={{ process: this.handleProcessing.bind(this) }}
        oninit={() => this.handleInit()}>

        {this.state.files.map(file => (
          <File key={file} source={file} />
        ))}

      </FilePond>

    );
  }
}

export default FilePondInput;