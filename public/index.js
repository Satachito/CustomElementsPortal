////////////////////////////////////////////////////////////////	v	Utilities

const
IsMobile = () => window.innerWidth < 768

const
dialogElements = Array.from( document.getElementsByTagName( 'dialog' ) )

dialogElements.forEach(
	dialog => (
		dialog.querySelector( 'i.fa-close' ).onclick = ev => dialog.close()
	)
)

////////////////////////////////////////////////////////////////	v	Route

const
Route = () => {
	const
	AppendTemplate = _ => {
		const
		MAIN = document.querySelector( 'main' )
		MAIN.innerHTML = ''
		MAIN.appendChild( _.content.cloneNode( true ) )
	}
	const
	AppendIFrame = _ => {
		const
		MAIN = document.querySelector( 'main' )
		MAIN.innerHTML = ''
		MAIN.appendChild( document.createElement( 'iframe' ) ).setAttribute( 'src', _ )
	}

	switch ( location.pathname ) {
	case '/'		: AppendTemplate( T_HOME			); break
	case '/stock'	: AppendTemplate( T_STOCK			); break
	case '/fx'		: AppendTemplate( T_FX				); break
	case '/metal'	: AppendTemplate( T_METAL			); break
	case '/crypto'	: AppendIFrame	( '/crypto.html'	); break
	default			: AppendTemplate( T_404				); break
	}
}
window.addEventListener( 'popstate', Route )

Route()

const
Navigate = page => (
	history.pushState( { page }, null, page )
,	Route()
)
HOME_B		.onclick = () => Navigate( '/'			)

////////////////////////////////////////////////////////////////	v	Internationalization

import {
	EN
,	JA
} from './i18n.js'

{	const
	lang = new URLSearchParams( location.search ).get( 'lang' )
	lang && ( LANGUAGE_S.value = lang )
}

const
T = _ => {
	switch ( LANGUAGE_S.value ) {
	case 'en':
		return EN( _ )
	case 'ja':
		return JA( _ )
	default:
		return _
	}
}
LANGUAGE_S.onchange = () => location.search = '?lang=' + LANGUAGE_S.value

const
TC = _ => _.textContent = T( _.id )

TC( LOGOUT_B	)
TC( DELETE_B	)

////////////////////////////////////////////////////////////////	v	app
import {
	initializeApp
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js'
const
app			= initializeApp	(
	{	apiKey				: "AIzaSyBoKdX_PmuCXC05wvc7wL5WGc0_uMr5LOo"
	,	authDomain			: "customelementsportal.firebaseapp.com"
	,	projectId			: "customelementsportal"
	,	storageBucket		: "customelementsportal.appspot.com"
	,	messagingSenderId	: "904412153412"
	,	appId				: "1:904412153412:web:db039643305aff4e5f1e11"
	,	measurementId		: "G-2468YLXT65"
	}
)

////////////////////////////////////////////////////////////////	v	Analytics
import {
	getAnalytics
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js'
const
analystics	= getAnalytics	( app )

////////////////////////////////////////////////////////////////	v	Auth
import { 
	connectAuthEmulator
,	getAuth
,	onAuthStateChanged
,	signInWithPopup
,	signInWithRedirect
,	GoogleAuthProvider
,	signOut
,	deleteUser
,	getRedirectResult
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js'
const
auth		= getAuth		( app ); location.hostname === 'localhost' && connectAuthEmulator( auth, 'http://localhost:9099' )

getRedirectResult( auth ).then( _ => console.log( 'getRedirectResult', _ ) ).catch( console.error )

////////////////////////////////////////////////////////////////	v	Firestore
import {
	connectFirestoreEmulator
,	getFirestore
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js'
const
db			= getFirestore	( app ); location.hostname === 'localhost' && connectFirestoreEmulator( db, 'localhost', 8080 )

////////////////////////////////////////////////////////////////	v	storage
import {
	connectStorageEmulator
,	getStorage
} from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js'
const
storage		= getStorage	( app ); location.hostname === 'localhost' && connectStorageEmulator( storage, 'localhost', 9199 )

////////////////////////////////////////////////////////////////	v	

onAuthStateChanged(
	auth
,	user => (
		dialogElements.forEach( _ => _.close() )
	,	user
		?	(	USER_B.textContent	= user.displayName ?? user.email
			,	USER_B.onclick		= () => (
					DISPLAY_NAME	.textContent	= user.displayName
				,	EMAIL			.textContent	= user.email
				,	MY_D.showModal()
				)
			)
		:	(	USER_B.textContent	= T( 'LOGIN' )
			,	USER_B.onclick		= () => IsMobile()
				?	signInWithRedirect( auth, new GoogleAuthProvider() )
				:	signInWithPopup( auth, new GoogleAuthProvider() ).then( console.log ).catch( console.error )
			)
	)
)

LOGOUT_B.onclick = () => signOut( auth ).then( console.log ).catch( console.error )
DELETE_B.onclick = () => confirm( T( 'confirm/deleteUser' ) ) && deleteUser( auth.currentUser ).then( () => alert( T( 'deleteUser' ) ) ).catch( console.error )


/*
,	( tag, er ) => (
		console.log( tag, er )
	,	alert( tag + ':' + er.code + ':\n' + T( er.code ) ?? er.message ) 
	)
)

//	mail		-> Google	: mail/google
//	Facebook	-> Google	: facebook.com/google.com
//	GitHub		-> Google	: github.com/google.com
//	Any			-> mail		: email-already-in-use
//	Any			-> Facebook	: account-exists-with-different-credential
//	Any			-> GitHub	: account-exists-with-different-credential

export const
User							= () => auth.currentUser
export const
Email							= () => User() && User().email

export const
OnAuthStateChanged				= _ => onAuthStateChanged( auth, _ )
export const
GetIdToken						= () => getIdToken( User(), true )

export const
SignInWithGoogleRedirect		= () => signInWithRedirect( auth, new GoogleAuthProvider()		)	//	redirect されるのでここには来ない
export const
SignInWithFacebookRedirect		= () => signInWithRedirect( auth, new FacebookAuthProvider()	)	//	redirect されるのでここには来ない
export const
SignInWithGitHubRedirect		= () => signInWithRedirect( auth, new GitHubAuthProvider()		)	//	redirect されるのでここには来ない

export const
SignInWithGooglePopup			= () => TC( () => signInWithPopup( auth, new GoogleAuthProvider()	), 'signInWithPopup(Google)'	)
export const
SignInWithFacebookPopup			= () => TC( () => signInWithPopup( auth, new FacebookAuthProvider()	), 'signInWithPopup(Facebook)'	)
export const
SignInWithGitHubPopup			= () => TC( () => signInWithPopup( auth, new GitHubAuthProvider()	), 'signInWithPopup(GitHub)'	)

export const
CreateUserWithEmailAndPassword	= ( email, password )	=> TC( () => createUserWithEmailAndPassword	( auth, email, password	), 'createUserWithEmailAndPassword'	)
export const
SignInWithEmailAndPassword		= ( email, password )	=> TC( () => signInWithEmailAndPassword		( auth, email, password ), 'signInWithEmailAndPassword'		)

export const
SendEmailVerification			= ( email = Email() )	=> TX( () => sendEmailVerification	( User()		), 'sendEmailVerification'	, email )
export const
DeleteUser						= ( email = Email() )	=> TX( () => deleteUser				( User()		), 'deleteUser'				, email )
export const
SignOut							= ( email = Email() )	=> TX( () => signOut				( auth			), 'signOut'				, email )

export const
SendPasswordResetEmail			= email					=> TX( () => sendPasswordResetEmail	( auth, email	), 'sendPasswordResetEmail'	, email )
*/
