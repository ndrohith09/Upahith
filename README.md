# Upahith

## Abstract 
Dyslexia is a learning disorder that involves difficulty reading due to problems identifying speech sounds and learning how they relate to letters and words. According to the Dyslexia Association of India, 35 million children, or over 15% of all children enrolled in Indian schools, have dyslexia (2016 figures). Dyslexia can manifest itself as early as kindergarten, and preschool assessments look at the child's knowledge of the sounds that make up words and word retrieval skills. But Matthew Cruger, PhD, director of the Learning and Development Center at the Child Mind Institute, advises delaying formal evaluations until children are at least six years old and have received some formal reading training. One of the best ways to support children with dyslexia is to encourage those activities that they like and feel good at. Our product aims at engaging these kids and help them improve. 

## Problem Statement 
To help dyslexic kids on their learning arc and improve their skills with the help of deep learning based web application.

## Solution 
Children with dyslexia frequently struggle with pronunciation, knowledge retention, and hand-eye coordination. These three distinct traits have been incorporated into our approach to address these problems as soon as theyare detected. To start with, to work on their pronunciation. We show a word to the youngster and ask them to say the text aloud. The accuracy is then projected once this audio that has been transcribed to text. Secondly, we encounter knowledge retention and because it has been demonstrated that learning visually is more successful, we have included graphics to assist students recall the material. We have a feature where the model generates pertinent pictures based on the words that is entered. Finally, to aid the child in developing hand-eye coordination, the child should draw an image which is displayed. This is then used by the GauGAN is AI model which builds a realistic image. The initial picture displayed and the final image produced are compared, and a score is given to determine how accurate they are.

## Novelty
We as humans possess the power to remember those which we have caught visually in our memory. In our model we have incorporated image to image synthesis for hand eye coordination and text to image for better visualisation and summarisation. Though it is medically supported to be more beneficial and effective, such image inclusion to lessen the impacts of disabilities is not frequently done. Additionally, using graphics draws children in and keeps them interested.

## Inspiration
Our main goal was to create a better envisioned person in order to overcome the difficulties that dyslexic people experience and help them integrate into society as regular human beings. 

## What it does
**Pronunciation :** Pronouncing the words appearing on the screen and analyzing the pronounced words to assign scores. Defining scores based on the word pronunciation analyzed after speech to text. Enter some text in the field provided and click on speak button to know its pronounciations.
![Screenshot from 2022-09-04 11-44-07](https://user-images.githubusercontent.com/73429989/188300359-73080692-e963-4bb0-b682-32ff8e8e0b4c.png) 
![Screenshot from 2022-09-04 11-44-17](https://user-images.githubusercontent.com/73429989/188300389-ccfa5f89-88a9-4217-8ea2-d3365805910a.png)

**Learn with Image :** Input the text & encode it with the pre-trained DistilBERT base model. Resnet-50 model is used to encode the images. Find the best matches and display the images. This helps to visualize the text. 
![Screenshot from 2022-09-04 11-43-06](https://user-images.githubusercontent.com/73429989/188300298-fb70766d-758a-4da0-9249-d451ffd68f98.png) 

**Paint to Image :** Paint the sketch in canvas provided there and click generate image . Realistic image of your sketch is generated . Output the accuracy match.
![Screenshot from 2022-09-04 11-43-38](https://user-images.githubusercontent.com/73429989/188300324-de1e3e18-0755-4224-aebc-ccc7964e3748.png) 

## How we built it
- To improve their pronunciation we used javascript and assembly api to work on with speech to text parts.
- To make them learn with images we used DistilBert base uncased model which was pretrained on he same data as BERT, which is BookCorpus, a dataset consisting of 11,038 unpublished books and English Wikipedia .
- The model was trained on 8 16 GB V100 for 90 hours . ResNet-50 is a convolutional neural network that is 50 layers deep which is pretrained version of the network trained on more than a million images from the ImageNet database and can classify upto 1000 classes .
- Images will be predicted from Fickr30k dataset which consists of 30,000+ images.
- Nvidia GAUGAN was used to create this image to image synthesis part .
- The model is pre-trained on 10 million nature photographs, produces realistic images based on a user’s description.

## Challenges we ran into
- The component that was most difficult involved using the ResNet 50 model for image encoding and DistilBERT for text encoding.
- The user interface integration of our deep learning model was challenging.
- Working with a deep learning model was a difficult portion of the project.
- It was challenging to work on speech to text logics.

## Accomplishments that we're proud of
- We were successful in developing a remarkable approach that can assist dyslexic people in overcoming their daily difficulties.
- For text processing, we were able to leverage Microsoft's Distilbert Model.
- It was amazing to think of creating a web application and using this concept.

## What we learned
- Deep learning model training required a significant amount of time and computation power.
- It was difficult to integrate our deep learning model with the user interface.
- Improving the model's accuracy was an aesthetic taste.
- We gained experience using FastApi and gained knowledge of several deep learning models.
- We learned about a few issues that dyslexic people experience.
- We also learned how to use axios to integrate the react js api

## What's next for Upahith
- Giving feedback for word pronunciation.
- Personalized dashboard to get insights.
- The application can also be extended to school kids from rural areas.
- Improving models accuracy for better performance of the application.
- By incorporating regional languages, they can enhance their pronunciation skills across a range of languages. 

## User
- Target user  : Parents 
- End  user : Kids 
