# books-api
-Create a backend to handle API requests and connect it to MongoDB Atlas (Create your Database and obtain key) to perform CRUD operations
-Share the Github repo link or Heroku hosted project URL (via Angel List chat message or email founder@flipthescript.in) within 3 days
-Create a collections in the Database "Backend":

# "book":
	number: 2,
	books:[{id:(generated automatically),name:"2 States",author:"Chetan Bhagat",rating:5,ratersNumber:1,raters:["ayush","shekhar","madhav"]},
	{id:(generated automatically),name:"Immortals of Meluha",author:"Amish Tripathi",rating:4,ratersNumber:3,raters:["ayush","shekhar","madhav"]}]

-Write the following 3 API:

#1: API to return details of the requested book
	-GET "/book/:title"
	-It should query the "book" collection and see if book by the name "title" exists or not
	-return a JSON response { status:
	true (if all data is valid and title is found in the list of books) OR
	false (if data is invalid and title is not found in the list of books),
	details:{id,name,author,rating,raterNumber,raters[array]} (return the object) OR
	null (if status is false)

#2:API to check if user has rated a book or not
	-GET "/ratingStatus/:username/:book"
	-It should query the "book" collection and see if the username exists in the rater  list of given book
	-return a JSON response {status:
	true (if all data is valid and user is in rater list of the book) OR
	false (if data is invalid or user is not in rater list of the book),
	rating:
	1-5 (if all data is valid and user is in rater list of the book) OR
	null (if data is invalid or user is not in rater list of the book),
	bookList:return entire "book" collection}

#3:API to rate a book
	-POST "/rating/:username/:book/:rate"
	-It should query the "book" collection and make following updates in the document of given book:
	*Update rating=(rating*raterNumber+rate)/(raterNumber+1)
	*Increase "raterNumber" value by 1
	*Add username in "raters" list	
	-return a JSON response {status:
	true (if all data is valid and user rating is updated for the book) OR
	false (if data is invalid or user rating is not updated for the book)}

Points to be noted:
-Assign suitable names to the variables and functions
-Write neat and well-structured code
-Attach 2-4 screenshots of the working project in the Postman window (response received and request status)
