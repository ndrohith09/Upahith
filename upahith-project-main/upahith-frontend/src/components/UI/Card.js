const Card = () => {

    const titles = [
        { count: '01' , name: 'Text to Image' , link:'/story-generator' , description : "Input the text & encode it with the pre-trained DistilBERT base model. Find the best matches and display the images. Convert your text to images and visualize your text better with images" },
        { count: '02' , name: 'Paint to Image' , link:'http://127.0.0.1:8001/' , description : "Paint the sketch as you see in the image.Generate realistic image of your sketch.Compare the given image & generated image.Output the accuracy match."},
        { count: '03' , name: 'Speech to Text' , link: 'http://127.0.0.1:5500/speech-to-text/' , description : "Pronouncing the words appearing on the app and analyzing the pronounced words to assign scores.Define accuracies based on the word pronunciation analyzed after speech to text."}
    ];


    return (
        <div className="row">
            { titles.map((item) => {
                return (
                <div className="col-md-4">
                    <div className="card mb-4 mb-md-0">
                        <div className="card-body">
                            <small className="text-primary font-weight-bold">{item.count}</small>
                            <h5 className="card-title mt-3">{item.name}</h5>
                            <p className="mb-0">{item.description}</p>
                            <a href={item.link}><button type="button" className="btn btn-primary rounded w-md mt-3">Go to Link</button></a>
                        </div>
                    </div>
                </div>
                );
            }) }
        </div>
    );
}

export default Card;