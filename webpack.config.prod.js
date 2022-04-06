const path = require("path"); 
const HtmlWebpackPlugin = require("html-webpack-plugin");  
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");  
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		chunkFilename: "[id].js",
	},
	mode: "production",
	devtool: "inline-source-map",
	cache: false,
	resolve: {
		extensions: [".js", ".ts", ".tsx"],
		alias: {
			components: path.resolve(__dirname, "src/components/"),
			animations: path.resolve(__dirname, "src/animations/"),
			core: path.resolve(__dirname, "src/core/"),
			pages: path.resolve(__dirname, "./src/pages/"),
			containers: path.resolve(__dirname, "src/containers/"),
			routes: path.resolve(__dirname, "src/routes/"),
			types: path.resolve(__dirname, "./src/types/"),
			interfaces: path.resolve(__dirname, "./src/interfaces/"),
			common: path.resolve(__dirname, "./src/common/"),
			validations: path.resolve(__dirname, "src/validations/"),
			services: path.resolve(__dirname, "src/services/"),
			hooks: path.resolve(__dirname, "src/hooks/"),
			helpers: path.resolve(__dirname, "src/helpers/"),
			context: path.resolve(__dirname, "src/context/"),
			constants: path.resolve(__dirname, "src/constants/"),
			assets: path.resolve(__dirname, "src/assets/"),
			images: path.resolve(__dirname, "src/assets/images/"),
			icons: path.resolve(__dirname, "src/assets/images/icons/"),
			logos: path.resolve(__dirname, "src/assets/images/logos/"),
			carousel: path.resolve(__dirname, "src/assets/images/carousel/"),
			videos: path.resolve(__dirname, "src/assets/videos/"),
			fonts: path.resolve(__dirname, "src/assets/fonts/"),
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
					},
				],
			},
			{
				test: /\.(css|scss)$/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "resolve-url-loader",
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.(png|jp(e*)g|svg|gif|webp)$/,
				type: "asset",
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: "./public/index.html",
			filename: "./index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		new CleanWebpackPlugin(),
	],
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
	},
};
