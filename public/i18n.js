export const
JA = _ => (
	{	'confirm/deleteUser'							: 'メアドを削除します。この操作は取り消せません。よろしいですか？'
	,	'deleteUser'									: 'メアドを削除しました。'

	,	'auth/account-exists-with-different-credential'	: 'このメアドはすでに他のプロバイダで登録されています。'
	,	'auth/email-already-in-use'						: 'このメアドはすでに使われています。'
	,	'auth/popup-closed-by-user'						: 'ポップアップが閉じられました。'
	,	'auth/too-many-requests'						: 'メールの確認がまだです。メールが見つからない場合は少し経ってから再度ログインを試みてください。'
	,	'auth/invalid-email'							: 'メアドの形式が間違っています。'
	,	'auth/missing-password'							: 'パスワードが入力されていません。'
	,	'auth/weak-password'							: 'パスワードが弱すぎます。最低６文字必要です。'

	,	'auth/wrong-password'							: 'パスワードが間違っています。'			//	メール列挙保護されていない場合
	,	'auth/user-not-found'							: 'メアドが登録されていません。'			//	メール列挙保護されていない場合
	,	'auth/invalid-credential'						: 'メアドかパスワードが間違っています。'	//	メール列挙保護されている場合

	,	'auth/invalid-custom-token'						: 'カスタムトークンが無効です。'	 		//	未確認

	,	'auth/admin-restricted-operation'				: 'このオペレーションは禁止されています'

	,	'LOGIN'											: 'ログイン'

	,	'LOGOUT_B'										: 'ログアウト'
	,	'DELETE_B'										: 'アカウントを削除'

	,	'STOCK_B'										: '株式'
	,	'FX_B'											: '為替(FX)'
	,	'METAL_B'										: '貴金属'
	,	'CRYPTO_B'										: '暗号資産'
	}
)[ _ ]

export const
EN = _ => (
	{	'confirm/deleteUser'							: 'Delete mail address. This operation cannot be undone. Are you sure?'
	,	'deleteUser'									: 'Deleted your mail address.'

	,	'auth/account-exists-with-different-credential'	: 'This mail address is already registered with another provider.'
	,	'auth/email-already-in-use'						: 'This mail address is already in use.'
	,	'auth/popup-closed-by-user'						: 'The popup has been closed.'
	,	'auth/too-many-requests'						: 'The mail has not been confirmed yet. If you cannot find your email, please try to log in again a little later.'
	,	'auth/invalid-email'							: 'The format of your email address is incorrect.'
	,	'auth/missing-password'							: 'The password has not been entered.'
	,	'auth/weak-password'							: 'Password is too weak. It must be at least 6 characters long.'

	,	'auth/wrong-password'							: 'Password is wrong.'
	,	'auth/user-not-found'							: 'No mail address registered.'
	,	'auth/invalid-credential'						: 'Either the mail address or the password is incorrect.'

	,	'auth/invalid-custom-token'						: 'Invalid custom token'

	,	'auth/admin-restricted-operation'				: 'This operation is prohibited'

	,	'LOGIN'											: 'Login'

	,	'LOGOUT_B'										: 'Logout'
	,	'DELETE_B'										: 'Delete account'

	,	'STOCK_B'										: 'Stocks'
	,	'FX_B'											: 'Exchange(FX)'
	,	'METAL_B'										: 'Metal'
	,	'CRYPTO_B'										: 'Crypto'
	}
)[ _ ]
