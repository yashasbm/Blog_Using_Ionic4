import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.page.html',
  styleUrls: ['./blogs.page.scss'],
})
export class BlogsPage implements OnInit {

  blogID: any;
  blogContent : string;
  blogTitle : string;
  blogSubTitle : string;
  blogImage : string;

  constructor(
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.blogID = this.route.snapshot.paramMap.get('id');
    console.log(this.blogID);
    this.displayData();

  }

  displayData() {
    if (this.blogID == "1") {
      this.blogTitle = "Pininfarina Battista";
      this.blogSubTitle = "by Mahindra";
      this.blogImage = "./assets/blogImages/automobile/pinin.jpg";
      this.blogContent = "This, ladies and gentlemen, is the most powerful road-legal car ever to come out of Italy. It’s probably worth pondering that for a second. Thanks to a 120 kWh lithium ion battery pack, the Pininfarina Battista produces approximately 1,900bhp and 1,696 torques. Barmy numbers. And because of the unique properties of e-motion, it’s enough to give this drop-dead beautiful looking thing Formula One car-style acceleration. Zero to 62mph apparently takes a tarmac-melting sub-two seconds, 186mph up in less than 12. All without the toxic haze of spent hydrocarbons from the tail-pipe, which is the more relevant point.";
    }

    else if (this.blogID == "2") {
      this.blogTitle = "La Voiture Noire";
      this.blogSubTitle = "by Bugatti";
      this.blogImage = "./assets/blogImages/automobile/bugatti.jpg";
      this.blogContent = "‘La Voiture Noire’ is the result, an extraordinary looking machine that uses the Chiron as its basis, with the familiar – if that’s the word – near-1500bhp, 8.0-litre, quad-turbocharged, 16-cylinder underneath that majestically reworked rear end. There’s one other thing: although the exact figure hasn’t been confirmed, this one-off has apparently set its new owner back £12m, making it the most expensive new car ever. ";
    }

    else if (this.blogID == "3") {
      this.blogTitle = "Agera RS";
      this.blogSubTitle = "by Koenigsegg";
      this.blogImage = "./assets/blogImages/automobile/agera.jpg";
      this.blogContent = "Forget Joshua vs Klitschko. The only heavyweight battle you need to know about in 2017 is Koenigsegg vs Bugatti. Because today, we learn that a Koenigsegg Agera RS has managed to go from 0-249mph-0 in 36.44s seconds. Out of context, you’re probably sitting there non-plussed. In context however – and to reuse our boxing parlance – this can be officially labelled a ‘haymaker’. It is a haymaker because that Agera time is over five seconds quicker than the 0-249mph-0 time posted by the mighty Bugatti Chiron only last month (41.96secs).";
    }

    else if (this.blogID == "4") {
      this.blogTitle = "Galaxy S10";
      this.blogSubTitle = "by Samsung";
      this.blogImage = "./assets/blogImages/smartphones/s10.jpg";
      this.blogContent = "Samsung’s new phones carry forward the flagship design staple: a metal frame with glass panels front and back. This year, Samsung has an aluminum frame and Gorilla Glass 6 front and back. Each panel is curved and fits into the frame perfectly. The S8 and S9 series had more obvious curves, where those of the S10 series are more subtle. As flagships go, the S10 brood is right up there with the best metal-and-glass from Apple, Huawei, and LG.";
    }

    else if (this.blogID == "5") {
      this.blogTitle = "P30 Pro";
      this.blogSubTitle = "by Huawei";
      this.blogImage = "./assets/blogImages/smartphones/p30.jpg";
      this.blogContent = "The Huawei P30 Pro features four cameras on the back.The standard lens camera, which will be used in most situations, is in the middle of the triple-camera module. It features a 40MP sensor with a 27mm f/1.6 lens; by default, images are shot at 10MP resolution, meaning data from four adjacent pixels is combined into one using pixel binning, for improved quality. Huawei P30 Pro camera module and TOF macro At the top, you have your ultra-wide-angle camera. This is something we’ve seen before on the Mate 20 Pro and several LG phones. It’s a 20MP 16mm f/2.2 lens that will come in handy for landscapes, groups of people, and many other scenarios where you want to capture a wide scene. At the bottom of the triple-camera module is the most interesting of the bunch. It’s an 8MP f/3.4 camera that uses a horizontal periscope design to achieve 5X optical zoom and up to 10X hybrid lossless zoom. This is a great feature to have when you want to crop in on a distant subject, be it a face in a crowd or the moon on the night sky.";
    }

    else if (this.blogID == "6") {
      this.blogTitle = "Galaxy Fold";
      this.blogSubTitle = "by Samsung";
      this.blogImage = "./assets/blogImages/smartphones/fold.jpg";
      this.blogContent = "Samsung says the Galaxy Fold doesn’t create a new category, it defies category. The phone unfolds like a book. It has a metal chassis around the outer edges and a foldable seam in the middle. It acts as a phone when closed thanks to a 4.6-inch HD+ Super AMOLED external screen, and as a tablet when unfolded thanks to the 7.3-inch QXGA+ Dynamic AMOLED Infinity Flex display. Samsung says it engineered the hinge and Infinity-Flex display to handle hundreds of thousands of folds and unfolds. front side photo of the Samsung galaxy fold in a tablet mode, held in a hand. The internal screen features three-app mutli-tasking. Each screen works separately on its own, but the displays work together to create a seamless device. Users can switch between the screens without missing a beat. The software transitions from the small display to the large display without interruption or hesitation. This is called app continuity. When multi-tasking, users can drag apps between the windows. One app is featured prominently, while two are smaller and to the side.";
    }

    else if (this.blogID == "7") {
      this.blogTitle = "Alien Wear Area M15";
      this.blogSubTitle = "by Dell";
      this.blogImage = "./assets/blogImages/laptops/alienwear.png";
      this.blogContent = "The Alienware Area-51m is trying to deliver on a dream: a gaming laptop with user-upgradeable CPUs and GPUs like a desktop so it won’t become obsolete. (At least that’s the plan; check out our feature story.) But as you might expect, the most premium parts won’t be cheap. Alienware’s configurator page now shows that a fully kitted Area-51m — complete with a bona fide 8-core Intel Core i9-9900K desktop processor, Nvidia RTX 2080 mobile graphics, and a 144Hz screen — will cost $4,000 today. That’s too rich for me.";
    }

    else if (this.blogID == "8") {
      this.blogTitle = "XPS 2019";
      this.blogSubTitle = "by Dell";
      this.blogImage = "./assets/blogImages/laptops/xps.jpg";
      this.blogContent = "Samsung says the Galaxy Fold doesn’t create a new category, it defies category. The phone unfolds like a book. It has a metal chassis around the outer edges and a foldable seam in the middle. It acts as a phone when closed thanks to a 4.6-inch HD+ Super AMOLED external screen, and as a tablet when unfolded thanks to the 7.3-inch QXGA+ Dynamic AMOLED Infinity Flex display. Samsung says it engineered the hinge and Infinity-Flex display to handle hundreds of thousands of folds and unfolds. front side photo of the Samsung galaxy fold in a tablet mode, held in a hand. The internal screen features three-app mutli-tasking. Each screen works separately on its own, but the displays work together to create a seamless device. Users can switch between the screens without missing a beat. The software transitions from the small display to the large display without interruption or hesitation. This is called app continuity. When multi-tasking, users can drag apps between the windows. One app is featured prominently, while two are smaller and to the side.";
    }

    else if (this.blogID == "9") {
      this.blogTitle = "Surface Laptop 2";
      this.blogSubTitle = "by Microsoft";
      this.blogImage = "./assets/blogImages/laptops/surface.jpg";
      this.blogContent = "So, for this year’s Surface Laptop 2, Microsoft changed… basically nothing. The Surface Laptop 2 is very much the same computer as the first Surface Laptop, just with updated internals and a couple of extra color options. The pricing is even the same: the Laptop 2 starts at $999 and can be configured to well over $2,000. Most people will be content with the $1,299 option, which provides a comfortable amount of local storage and unlocks the options for new colors. Is all of this a bad thing? I don’t think so, the Surface Laptop 2 is just as good a computer as last year’s model, and it does a lot of things that matter with a laptop correctly. As the adage goes, if it ain’t broke, don’t fix it, and so on. But since the Surface Laptop’s release last year, there have been several interesting laptops from makers like Huawei and HP that feature some more modern options, more modern designs, or more powerful components. The Surface Laptop 2 is playing the same ball that the Surface Laptop did last year, but this time around, the game’s changed a little.";   }



  }

}
